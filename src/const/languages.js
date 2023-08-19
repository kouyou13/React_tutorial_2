const LANGUAGES = [
  'C',
  'C++',
  'Java',
  'JavaScript',
  'Python',
  'Perl',
  'PHP',
  'Go'
];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  })
}