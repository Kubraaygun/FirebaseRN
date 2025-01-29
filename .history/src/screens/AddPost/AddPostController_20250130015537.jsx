const handleSubmit = () => {
  const postData = {
    ...form,
    id: new Date().getTime(),
    date: new Date(),
  };

  axios
    .post('http://localhost:3000/posts', postData)
    .then(res => {
      console.log('Post successful:', res.data);
      setForm({
        title: '',
        text: '',
        user: '',
      });

      // Gönderiyi ekledikten sonra ListPost verisini yeniden çek
      axios
        .get('http://localhost:3000/posts')
        .then(response => {
          // Listeyi güncelle
          setPostData(response.data); // Burada ListPostController'daki setPostData fonksiyonuna erişebilmelisin
          navigation.navigate('ListPost');
        })
        .catch(error => console.log('Veri çekme hatası:', error));
    })
    .catch(err => {
      console.log('Error:', err.message);
    });
};
