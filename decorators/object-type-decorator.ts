// class decorator
function ObjectType(__name: string) {
  return (target: Function) => {
    Object.assign(target.prototype, { __name });
  };
}

// property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(
          `Expect ${key} to have length ${length} but received ${value.length}`
        );
      }
      _value = value;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

@ObjectType("user")
export class User {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
