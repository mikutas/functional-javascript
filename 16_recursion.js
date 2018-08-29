var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
};

function getDependencies(tree, result) {
  // tree = tree || loremIpsum; // for debug
  tree = tree || [];
  result = result || [];
  let dependencies = tree && tree.dependencies || {};
  Object.keys(dependencies).forEach((dep) => {
    result.push(dep + "@" + dependencies[`${dep}`]["version"]);
    getDependencies(dependencies[`${dep}`], result);
  });
  return Array.from(new Set(result)).sort();
}

module.exports = getDependencies;
