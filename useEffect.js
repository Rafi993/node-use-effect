const useEffect = (callback, dependencies = {}) => {
  // Calling it first time since there are no dependency
  if (Object.keys(dependencies).length === 0) {
    return callback();
  }

  // Creating proxy for getter and setters
  return new Proxy(dependencies, {
    get: function (target, key) {
      callback();
      Reflect.get(target, key);
    },
    set: function (target, key, value) {
      callback();
      Reflect.set(target, key, value);
    },
  });
};

module.exports = useEffect;
