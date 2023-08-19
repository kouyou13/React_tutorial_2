const LANGUAGES = [
  'C',
  'C++',
  'Java',
  'JavaScript',
  'Python',
  'Perl',
  'PHP',
  'Go'
]
// export const List = ({title}) => {
export const List = ({}) => {
  return (
    <div>
      {/* <h4>{title}</h4> */}
      {/* <div>リストです</div> */}
      {
        LANGUAGES.map((lang, index) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
}