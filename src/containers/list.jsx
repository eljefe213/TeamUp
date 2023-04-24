import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux' 
import {selectTeam} from '../slices/teamSlice'
import Card from "../components/card"
import SearchBar from '../components/searchBar'


const List=(props)=>{

    const team = useSelector(selectTeam)

    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('firstname');
    const [searchType, setSearchType] = useState('Technique');

    const [resultSearch, setResultSearch]=useState([])
    const [filteredSearch, setFilteredSearch]=useState(false)

    const styleList={

        width: "45%",
        height: "60%",
        margin: "2% 0 0 0"  
    }


    useEffect(()=>{
        console.log(searchTerm)
      
    },[searchTerm])

    useEffect(()=>{
        console.log(filteredSearch)
    },[filteredSearch])

    useEffect(()=>{
        if(searchTerm.length>0){
            const tab=[]
            team.team.map((elt)=>{
                switch(true){
                    case searchBy=="firstname":
                        if(elt.firstname.includes(searchTerm) && elt.service == searchType){
                            tab.push(elt)
                        }
                        break;
                    case searchBy=="lastname":
                        if(elt.lastname.includes(searchTerm) && elt.service == searchType){
                            tab.push(elt)
                        }
                        break;
                    case searchBy=="city":
                        if(elt.city.includes(searchTerm) && elt.service == searchType){
                            tab.push(elt)
                        }
                        break;
                    case searchBy=="country":
                        if(elt.country.includes(searchTerm) && elt.service == searchType){
                            tab.push(elt)
                        }   
                    break;
                }
            })
            setResultSearch(tab)
        }else{
            setResultSearch([])
        }
    },[searchTerm, searchBy, searchType])

    useEffect(()=>{
        console.log(resultSearch)
    },[resultSearch])

    const handleSearchTermChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSearchByChange = event => {
        setSearchBy(event.target.value);
    };

    const handleSearchTypeChange = event => {
        setSearchType(event.target.value);
    };

    
    useEffect(()=>{
        console.log(team.team)
    },[])

    return(
        <section className="container" id="end">
        <div className="container-bis">
            <div className="search-bar">
                <SearchBar handleSearchTermChange={handleSearchTermChange} handleSearchByChange={handleSearchByChange} handleSearchTypeChange={handleSearchTypeChange} searchTerm={searchTerm} searchBy={searchBy} searchType={searchType} />
            </div>
            <div className="list-container">
            { searchTerm.length===0&&  
                team.team.map((elt)=>{
                    return(
                        <Card style={styleList} infos={elt} />
                    )
                }) }
                {resultSearch.length>0&&
                resultSearch.map((elt)=>{
                    return(
                        <Card style={styleList} infos={elt} />
                    )
                })}
                {resultSearch.length===0&&searchTerm.length>0&&
                    
                        <div>
                            <p>La recherche ne donne aucun résultat</p>
                        </div>
                    
                }
    
            </div>
        </div>
        </section>
    )
}

export default List