function ApiVersion(version: string) {
  return (target: Function) => {
    Object.assign(target.prototype, { __version: version });
  };
}

@ApiVersion("1.0.0")
class API {}

console.log(new API());
