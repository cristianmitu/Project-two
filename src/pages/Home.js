import React, { useState } from "react"
import SearchForm from "./../components/SearchForm"
import Trending from "./../components/Trending"

function Home() {

    return (
        <div className="container" id="HomePage">
            {/* <h2>Search for your favourite actor</h2> */}
            <SearchForm />
        </div>
    )
}

export default Home;