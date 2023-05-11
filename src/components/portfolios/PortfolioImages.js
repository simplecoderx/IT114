// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import ImageList from '@mui/material/ImageList';
// // import ImageListItem from '@mui/material/ImageListItem';

// //  function PortfolioImages() {
// //   return (
// //     <Box sx={{ width: 1200, height: 450, marginLeft: '15px', overflowY: 'scroll' }}>
// //       <ImageList variant="masonry" cols={3} gap={8}>
// //         {itemData.map((item) => (
// //           <ImageListItem key={item.img}>
// //             <img
// //               src={`${item.img}?w=248&fit=crop&auto=format`}
// //               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
// //               alt={item.title}
// //               loading="lazy"
// //             />
// //           </ImageListItem>
// //         ))}
// //       </ImageList>
// //     </Box>
// //   );
// // }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import { useState } from 'react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// function PortfolioImages() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const openLightbox = (index) => {
//     setIsOpen(true);
//     setPhotoIndex(index);
//   };

//   const closeLightbox = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Box sx={{ width: 1200, height: 450, marginLeft: '15px', overflowY: 'scroll' }}>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {itemData.map((item, index) => (
//           <ImageListItem key={item.img}>
//             <img
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.title}
//               loading="lazy"
//               onClick={() => openLightbox(index)}
//               style={{ cursor: 'pointer' }}
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//       {isOpen && (
//         <Lightbox
//           mainSrc={itemData[photoIndex].img}
//           nextSrc={itemData[(photoIndex + 1) % itemData.length].img}
//           prevSrc={itemData[(photoIndex + itemData.length - 1) % itemData.length].img}
//           onCloseRequest={closeLightbox}
//           onMovePrevRequest={() => setPhotoIndex((photoIndex + itemData.length - 1) % itemData.length)}
//           onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % itemData.length)}
//         />
//       )}
//     </Box>
//   );
// }

// const itemData = [
//   {
//     img: '/img/p1.png',
//     title: 'Sample',
//   },  
//   {
//     img: '/img/p2.png',
//     title: 'S2',
//   },
//   {
//     img: '/img/p3.png',
//     title: 'S4',
//   },
//   {
//     img: '/img/p4.png',
//     title: 'S5',
//   },
//   {
//     img: '/img/p5.png',
//     title: 'S6',
//   },
//   {
//     img: '/img/p6.png',
//     title: 'S7',
//   },
//   {
//     img: '/img/p7.png',
//     title: 'S8',
//   },
//   {
//     img: '/img/p8.png',
//     title: 'S9',
//   },
//   {
//     img: '/img/p9.png',
//     title: 'S10',
//   },
//   {
//     img: '/img/p10.png',
//     title: 'S11',
//   },
//   {
//     img: '/img/p11.png',
//     title: 'S12',
//   },
//   {
//     img: '/img/p12.png',
//     title: 'S13',
//   },
//   {
//     img: '/img/p13.png',
//     title: 'S14',
//   },
//   {
//     img: '/img/p14.png',
//     title: 'S15',
//   },
//   {
//     img: '/img/p15.png',
//     title: 'S16',
//   },
//   {
//     img: '/img/p16.png',
//     title: 'S17',
//   },
//   {
//     img: '/img/p17.png',
//     title: 'S18',
//   },
//   {
//     img: '/img/p18.png',
//     title: 'S19',
//   },
// ];

// export default PortfolioImages;


import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Portfolio.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

function PortfolioImages() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [category, setCategory] = useState('All');

  const openLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filterItems = (items, category) => {
    if (category === 'All') {
      return items;
    }
    return items.filter((item) => item.category === category);
  };

  const filteredItems = filterItems(itemData, category);

  return (
    <Container fluid>
      <Row style={{ marginBottom: '-8rem', marginTop: '2rem' }}>
        <Col xs={12}>
          <Box sx={{ width: '100%', height: 450, marginLeft: '15px', overflowY: 'scroll' }}>
            <div className="d-flex justify-content-between mb-3">
              <Button className='portfolio-btn' variant={category === 'All' ? 'primary' : 'outline-primary'} onClick={() => handleCategoryChange('All')}>
                All
              </Button>
              <Button className='portfolio-btn' variant={category === 'Sanitizing' ? 'primary' : 'outline-primary'} onClick={() => handleCategoryChange('Sanitizing')}>
                Sanitizing
              </Button>
              <Button className='portfolio-btn' variant={category === 'Cleaning' ? 'primary' : 'outline-primary'} onClick={() => handleCategoryChange('Cleaning')}>
                Cleaning
              </Button>
              <Button className='portfolio-btn' variant={category === 'Residential' ? 'primary' : 'outline-primary'} onClick={() => handleCategoryChange('Residential')}>
                Residential
              </Button>
            </div>
            <ImageList variant="masonry" cols={3} gap={8}>
              {filteredItems.map((item, index) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => openLightbox(index)}
                    style={{ cursor: 'pointer' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            {isOpen && (
              <Lightbox
                mainSrc={filteredItems[photoIndex].img}
                nextSrc={filteredItems[(photoIndex + 1) % filteredItems.length].img}
                prevSrc={filteredItems[(photoIndex + filteredItems.length - 1) % filteredItems.length].img}
                onCloseRequest={closeLightbox}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + filteredItems.length - 1) % filteredItems.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % filteredItems.length)}
              />
            )}
          </Box>
        </Col>
      </Row>
    </Container>
  );
}

const itemData = [
    {
      img: '/img/p1.png',
      title: 'Sample',
      category: 'Sanitizing',
    },  
    {
      img: '/img/p2.png',
      title: 'S2',
      category: 'Cleaning',
    },
    {
      img: '/img/p3.png',
      title: 'S4',
      category: 'Residential',
    },
    {
      img: '/img/p4.png',
      title: 'S5',
      category: 'Sanitizing',
    },
    {
      img: '/img/p5.png',
      title: 'S6',
      category: 'Cleaning',
    },
    {
      img: '/img/p6.png',
      title: 'S7',
      category: 'Residential',
    },
    {
      img: '/img/p7.png',
      title: 'S8',
      category: 'Sanitizing',
    },
    {
      img: '/img/p8.png',
      title: 'S9',
      category: 'Cleaning',
    },
    {
      img: '/img/p9.png',
      title: 'S10',
      category: 'Residential',
    },
    {
      img: '/img/p10.png',
      title: 'S11',
      category: 'Sanitizing',
    },
    {
      img: '/img/p11.png',
      title: 'S12',
      category: 'Cleaning',
    },
    {
      img: '/img/p12.png',
      title: 'S13',
      category: 'Residential',
    },
    {
      img: '/img/p13.png',
      title: 'S14',
      category: 'Sanitizing',
    },
    {
      img: '/img/p14.png',
      title: 'S15',
      category: 'Cleaning',
    },
    {
      img: '/img/p15.png',
      title: 'S16',
      category: 'Residential',
    },
    {
      img: '/img/p16.png',
      title: 'S17',
      category: 'Sanitizing',
    },
    {
      img: '/img/p17.png',
      title: 'S18',
      category: 'Cleaning',
    },
    {
      img: '/img/p18.png',
      title: 'S19',
      category: 'Residential',
    },
  ];
  
  export default PortfolioImages;