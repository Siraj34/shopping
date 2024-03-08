import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectData } from '../reducer/cartSlice'
import { getFilter } from '../reducer/sliceReducer'

function Home({ search, setSearch }) {
  const data = useSelector(selectData)

  const [data2, setdata2] = useState(data)

  const dispatch = useDispatch()

  const filter1 = (cattitem, e) => {
    e.preventDefault()
    const update = data?.filter((order) => {
      return order.category === cattitem
    })

    setdata2(update)
    console.log(update)
  }
  useEffect(() => {
    dispatch(getFilter(data2))
  }, [data2])

  return (
    <div className=" h-screen bg-rose-500  md:flex w-full ">
      <div>
        <div className="md:flex md:flex-col justify-center ">
          <div className=" flex justify-center">
            {' '}
            <img
              className="home__image h-52 w-[1000px] "
              src="./images/soon.jpg"
              alt=""
            />
          </div>

          <form className="m-3 p-3 w-{500px}  flex justify-center ">
            <input
              type="text"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              className="w-[500px] h-10 "
            />
            <button className=" bg-orange-500 h-10 w-20 " type="submit">
              Search
            </button>
          </form>
          <div className="m-3 p-3 md:w-{500px}">
            <div
              className="  m-2 md:p-2  text-white font-bold 
             border-2 border-slate-900 divide-y divide-slate-900  "
            >
              <div className="md:flex  items-center md:gap-3 md:m-5 p-5  ">
                <button
                  className="border border-black text-orange-300  hover:bg-slate-200 uppercase h-10 w-40"
                  onClick={(e) => setdata2(data, e)}
                >
                  all products
                </button>
                <button
                  className="border border-rose-300 text-black uppercase hover:bg-slate-300 h-10 w-40 rounded-full"
                  onClick={(e) => filter1("men's clothing", e)}
                >
                  men's clothing
                </button>
                <button
                  className="border  border-rose-300 text-black uppercase  hover:bg-slate-300 h-10 w-40 rounded-full"
                  onClick={(e) => filter1('jewelery silver', e)}
                >
                  jewelery
                </button>
                <button
                  className="border  border-rose-300 text-black  uppercase hover:bg-slate-300 h-10 w-40 rounded-full"
                  onClick={(e) => filter1('electronics', e)}
                >
                  electronics
                </button>
                <button
                  className="border  border-rose-300 text-black uppercase  hover:bg-slate-300 h-10 w-40 rounded-full"
                  onClick={(e) => filter1('Shirts', e)}
                >
                  Shirts
                </button>
                <button
                  className="border  border-rose-300 text-black  text-xs uppercase hover:bg-slate-300 h-10 w-40 rounded-full"
                  onClick={(e) => filter1("women's clothing", e)}
                >
                  women's clothing
                </button>
                <button
                  className="border  border-rose-300 text-black  hover:bg-slate-300 h-10 w-40 rounded-full"
                  onClick={(e) => filter1('Pants', e)}
                >
                  Pants
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
