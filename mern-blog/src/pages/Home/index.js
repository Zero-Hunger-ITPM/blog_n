import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap, SearchBlog } from '../../components';
import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
// import SearchBlog from '../../components/molecules/SearchBlog';
 import { confirmAlert } from 'react-confirm-alert';
 import 'react-confirm-alert/src/react-confirm-alert.css';

// import Axios from 'axios';



const Home = () => {
  const [blog, setBlog] = useState([])
  const [BlogSearch , setcrsSearch] = useState("");

  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [counter, dispatch])


  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
  }

  return (
    

    <div className="home-page-wrapper">

    <div className="input-group" style={{ width: "30rem",  }}>
                  <div class="srch"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Blog" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button></div>
    </div>
    
     
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map(blog => {
          return <BlogItem
            key={blog._id}
            image={`http://localhost:4000/${blog.image}`}
            title={blog.title}
            body={blog.body}
            name={blog.author.name}
            date={blog.createdAt}
            _id={blog._id}
          />
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
      

      {blog && blog.filter((value) => {
      if (BlogSearch === "") {
        return value;
      } else if (value.title.toLowerCase().includes(BlogSearch.toLowerCase())) {
        return value;
      }
    })}

    </div>
    

    
    
    


 )
}

export default Home;

// import React, { useEffect, useState } from 'react';
// import { BlogItem, Button, Gap, SearchBlog } from '../../components';
// import './home.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { setDataBlog } from '../../config/redux/action';

// const Home = () => {
//   const [blog, setBlog] = useState([]);
//   const [BlogSearch, setBlogSearch] = useState('');
//   const [counter, setCounter] = useState(1);
//   const { dataBlog, page } = useSelector(state => state.homeReducer);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setDataBlog(counter));
//   }, [counter, dispatch]);

//   const previous = () => {
//     setCounter(counter <= 1 ? 1 : counter - 1);
//   };

//   const next = () => {
//     setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
//   };

//   const filteredBlog = blog.filter(value => {
//     if (BlogSearch === '') {
//       return value;
//     } else if (value.title.toLowerCase().includes(BlogSearch.toLowerCase())) {
//       return value;
//     }
//   });

//   return (
//     <div>
//       <div className="home-page-wrapper">
//         <div className="input-group" style={{ width: '30rem' }}>
//           <div className="srch">
//             <input
//               type="search"
//               onChange={e => {
//                 setBlogSearch(e.target.value);
//               }}
//               className="form-control rounded"
//               placeholder="Search Restaurant"
//               aria-label="Search"
//               aria-describedby="search-addon"
//             />
//             <button type="button" id="srbttn" className="btn btn-col" style={{ color: 'white' }}>
//               <i className="fa fa-search"></i>
//             </button>
//           </div>
//         </div>

//         <Gap height={20} />
//         <div className="content-wrapper">
//           {filteredBlog.map(blog => (
//             <BlogItem
//               key={blog._id}
//               image={`http://localhost:4000/${blog.image}`}
//               title={blog.title}
//               body={blog.body}
//               name={blog.author.name}
//               date={blog.createdAt}
//               _id={blog._id}
//             />
//           ))}
//         </div>
//         <div className="pagination">
//           <Button title="Previous" onClick={previous} />
//           <Gap width={20} />
//           <p className="text-page">
//             {page.currentPage} / {page.totalPage}
//           </p>
//           <Gap width={20} />
//           <Button title="Next" onClick={next} />
//         </div>
//         <Gap height={20} />
//       </div>
//     </div>
//   );
// };

// export default Home;
