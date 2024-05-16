
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/material';
//import kuvat jostain kansiosta
import { Image } from '@mui/icons-material';

function AvatarMUI({ src }) {

    const [kuva, setKuva] = useState(null);

    const muuta = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // nakyvissa = !nakyvissa;


    // const [nakyvissa, setNakyvissa] = useState(
    //     { visible: false }
    // );

    // const muuta = (e) => {
    //     setNakyvissa(
    //         {

    //             visible: e.target.value
    //         }
    //     )
    // }

    // const handleOk = (e) => {
    //     setNakyvissa(
    //         { visible: e.target.value }
    //     )
    // }

    // const handleCancel = (e) => {
    //     setNakyvissa(
    //         { visible: e.target.value }
    //     )
    // }

    // function addImage({ image }) {
    //     let error = useRouteError();
    //     const [kuva, setKuva] = useState('');
    // }

    // const handleImageChange = (e) => {
    //     setKuva(e);
    // }

    // <img src={'./kuvat/chinchilla.jpg'} />

    const poista = () => {
        setKuva(null)
    };

    return (
        <Avatar>

            {kuva ? (<Avatar src={kuva} alt="profileImage" sx={{ width: 100, height: 100 }} />) :
                (<Avatar icon={<AccountCircleIcon />} alt="profileIcon" sx={{ width: 100, height: 100 }} />)}
            {/*{src ? <img src={src} /> : <img src={kuvat / rr1.jpg'} />} alt = 'AM' >*/}
            <input type='file' id="avatar-upload" style={{ display: 'none' }} onChange={muuta} accept='././public/*' />
            <label htmlFor="avatar-upload">
                <Button component="span" variant="outlined">
                    Upload image
                </Button>
            </label>
            {kuva && (
                <Typography variant="body2">
                    <Button onClick={poista} color="error">Poista kuva</Button>
                </Typography>
            )}
        </Avatar >
    )
}


// return (
//     <>

//         <Avatar icon={<AccountCircleIcon />}>
//             {/*{src ? <img src={src} /> : <img src={kuvat / rr1.jpg'} />} alt = 'AM' >*/}
//             <Button onChange={(e) => muuta(e)} ></Button>
//             <Box
//                 name='nakyvissa' value={nakyvissa} onChange={(e) => muuta(e)}>


//             </Box>

//         </ Avatar >
//     </>
// )
// 


export default AvatarMUI;