import ReactNativeInputSearchBar from 'react-native-input-search-bar'
import { useState } from 'react'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [activeSearch, setActiveSearch] = useState(false)

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

export default SearchBar;