import React from 'react'

class Search extends React.Component{

    state = {search: ''}

    formSubmit = (e)=>{
        e.preventDefault();

        this.props.onSearchSubmit(this.state.search);
    }

    render(){
        
    return (
        <div className="search_box">
            <form onSubmit={this.formSubmit}>
               <br /> {/* <label>Video Search</label> */}
                <input type="text"  
                value={this.state.search}
                onChange={(e)=>this.setState({search: e.target.value})}
                 placeholder="Search Here..." 
                  className="form-control"/>
            </form>
        </div>
    )
}
}

export default Search
