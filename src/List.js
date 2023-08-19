// export const List = ({title}) => {
export const List = ({langs}) => {
  return (
    <div>
      {/* <h4>{title}</h4> */}
      {/* <div>リストです</div> */}
      {
        langs.map((lang, index) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
}