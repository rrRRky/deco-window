import Directory from "../../components/directory/directory.component";
const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Curtain",
      "imgURL": "https://decowindow.in/pub/media/pagecustomization/banner/default/Artboard_8.jpg"
    },
    {
      "id": 2,
      "title": "Blinds",
      "imgURL": "https://decowindow.in/media/magiccart/magicslider/s/h/sheer-blind-decowindow.jpg"
    },
    {
      "id": 3,
      "title": "Garden Torch",
      "imgURL": "https://decowindow.in/pub/media/pagecustomization/banner/default/Artboard_6.jpg"
    },
    {
      "id": 4,
      "title": "Cords",
      "imgURL": "https://decowindow.in//media/catalog/category/Instagram_Post_7_.jpg"
    },
    {
      "id": 5,
      "title": "Rods",
      "imgURL": "https://decowindow.in//media/catalog/category/Instagram_Post_17_.jpg"
    }
  ];

  return (
    <Directory categories={categories} />
  );
};

export default Home;
