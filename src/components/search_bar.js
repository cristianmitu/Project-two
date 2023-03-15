render() {
    return (
        <View>
         <ReactNativeInputSearchBar
           onSubmitSearch={(_val) => {
             console.log(_val);
           }}
           ...
           buttonText="Search"
         />
        </View>
    );
}