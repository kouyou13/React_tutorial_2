import { useState } from "react";
import {List} from "./List";
import {Form} from "./Form";
import { LANGUAGES } from "./const/languages";

function App() {
  // const [description, setDescription] = useState('クリック前の表示');
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(LANGUAGES);

  // const changeDescription = () => {
  //   setDescription("クリック後の表示です");
  // }

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang]); //langsにlangを追加
    setTab('list');
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {/* {description} */}
      {
        // 子コンポーネントにデータを渡す
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
      {/* <button onClick={changeDescription}>ボタン</button> */}

    </div>
  );
}

export default App;
