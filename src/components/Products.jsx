import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";


export default function Products(){
    const [data , setData] = useState([])
    const [next , setNext] = useState(1)
    const [search , setSearch] = useState("")
    const [currentPage, setPage] = useState(1)
    const url = `https://dummyjson.com/products?skip=${next}&limit=10`

    useEffect(()=>{
        async function getData(){
        const data = await fetch(url)
        const res = await data.json()
        setData(res.products)
        }
        getData()
    },[next])
    
    function handleClick(){
        setNext((e)=>e+10)
    }
    return(<div>
        <input type="text" 
        name="category" 
        id="category" 
        placeholder="Search by categories"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button>Search</button>
        
        <div>
            {search==""?<div>
                {data?.map((iter)=>{return <Card data = {iter}/>})}
            </div>:<div>
            {data?.filter((iter)=>iter.title===search)?.map((iter)=>{return <Card data = {iter}/>})}
                </div>}

        </div>

        <div>
            <button onClick={()=>setNext(0)}>1</button>
            <button onClick={()=>setNext(1*10)}>2</button>
            <button onClick={()=>setNext(2*10)}>3</button>
            <button onClick={()=>setNext(3*10)}>4</button>
            <button onClick={()=>setNext(4*10)}>5</button>
        </div>
    </div>)
}