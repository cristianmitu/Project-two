import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1> Test </h1>
    </div>
  );
}
import ReactNativeInputSearchBar from 'react-native-input-search-bar'
import { useState } from 'react'

const SearchBar = () => {
  const [query, setQuery] = useState<string>('')
  const [activeSearch, setActiveSearch] = useState<boolean>(false)

  const onSubmitSearch = (val: string) => {
    setQuery(val)
  }

  return (
    <ReactNativeInputSearchBar
      onSubmitSearch={onSubmitSearch}
      onActiveSearch={setActiveSearch}
      inputTextStyle={{}}
      buttonStyle={{
        paddingHorizontal: 20
      }}
      buttonTextStyle={{}}
      searchToolContainerStyle={{ height: 40 }}
      inputContainerStyle={{
        backgroundColor: '#ffffff',
        borderWidth: 0.3,
        borderRadius: 20
      }}
      inputProps={{
        placeholder: 'Please enter your search query'
      }}
      buttonText="Search"
    />
  )
}

export default SearchBar

export default App;
