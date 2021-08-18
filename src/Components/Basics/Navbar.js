import React from 'react'



//in unique data we get all navbar buttons from menu.category
// const navNavBtn = uniqeData.map(
//     (curElem) => {
//         return <>
//             <button className="btn-group__item" onClick={() => filterItem(curElem)}>
//                 {curElem}
//             </button>
//         </>
//     }

// )
export const Navbar = ({ filterItem, navBarlist }) => {

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        navBarlist.map(
                            (curEle) => {
                                return <>
                                    <button className="btn-group__item" onClick={() => filterItem(curEle)}>
                                    {curEle}

                                    </button>
                                </>
                            }

                        )
                    }
                </div>
            </nav>
        </>
    )
}
