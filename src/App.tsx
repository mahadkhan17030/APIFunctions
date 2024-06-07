
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Button } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import axios from "axios";

function App() {
  const getData = () => {
    axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            console.log(res.data, "data received");
            alert('data received')
        })
        .catch((err) => {
            console.log(err, "Error")
            alert('found error')
        });
};
const postData = () => {
    axios
        .post("https://jsonplaceholder.typicode.com/comments", {
        postId: '1',
        name: 'ABC',
        email: 'CAB@gmail.com',
        body:'CBA'

        })
        .then((res) => { console.log(res.data,'Data sent')
          alert('data post')
         })
        .catch((err) => { console.log(err,'Error occured')
          alert('found error in posting')
         })

}
const putData = () => {
    axios.put("https://jsonplaceholder.typicode.com/comments/1",{
      postId: '2',
      name: 'DAB',
      email: 'ABD@gmail.com',
      body:'BAD',
      id:32
    })
    .then((res) => { console.log(res.data,'Data sent') 
    alert('data put')
    })
    .catch((err) => { console.log(err,'Error occured')
    alert('found error in putting')
     })
}
const deleteData = () => {
    axios.delete("https://jsonplaceholder.typicode.com/comments/1")
   .then((res) => { console.log(res.data,'Data deleted')
   alert('delete successfully')
    })
   .catch((err) => { console.log(err,'Error occured')
   alert('found error in deleting')
    })
}

  return (
<Box className='text-center'>
            <h1 className="text-center border">API HANDLING</h1>
            <Button className="mt-5 me-5"
                onClick={getData}
                sx={{ margin: 1, textTransform: "capitalize" }}
                endIcon={<PublicIcon />}
                variant="contained"
            >
                Get DATA
            </Button>
            
            <Button className="mt-5 me-5"
                sx={{ margin: 1, textTransform: "capitalize" }}
                endIcon={<PublicIcon />}
                variant="contained" onClick={postData}
            >
                Post DATA
            </Button>
            
            <Button className="mt-5 me-5"
                sx={{ margin: 1, textTransform: "capitalize" }}
                endIcon={<PublicIcon />}
                variant="contained" onClick={putData}
            >
                Put DATA
            </Button>
            
            <Button className="mt-5 me-5"
                sx={{ margin: 1, textTransform: "capitalize" }}
                endIcon={<PublicIcon />}
                variant="contained" onClick={deleteData}
            >
                Delete DATA
            </Button>
            </Box>
  )
}

export default App;
