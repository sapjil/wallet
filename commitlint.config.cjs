module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['sentence-case', 'start-case', 'pascal-case', 'upper-case', 'lower-case']],
    'type-case': [2, 'always', ['pascal-case']],
    'type-enum': [2, 'always', ['Feat', 'Fix', 'Docs', 'Style', 'Design', 'Refactor', 'Rename', 'Remove', 'Test']],
  },
};
