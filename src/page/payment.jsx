import { Container } from '@chakra-ui/react';
import React from 'react';


function PaymentPage() {
  // const [book, setBook] = useState({});

  // useEffect(() => {
  //   const getCacheData = async () => {
  //     const cacheStorage = await caches.open('Book');
  //     const cachedResponse = await cacheStorage.match('http://localhost:3000');
  //     if (cachedResponse) {
  //       var data = await cachedResponse.json();
  //       setBook(data);
  //     }
  //   };
  //   getCacheData();
  // }, []);

  // //handle payment via stripe
  // const handlePayment = async data => {
  //   const order = {
  //     book: {
  //       name: book.name,
  //       category: book.category,
  //       price: book.price
  //     },
  //     customerName: data.customerName,
  //     phone: data.phone
  //   };

  //   await caches.open('Order').then(cache => {
  //     cache.put('http://localhost:3000', new Response(JSON.stringify(order)));
  //   });

  //   const res = await api.bookCheckout(order);
  //   window.location.href = res.data.url;
  // };

  return (
    <div className="payment-page">
      <Container maxW={'container.lg'} pt={20}>
        {/* <PaymentComponent book={book} />
        <FormComponent
          disableButton={Object.keys(book).length == 0}
          handlePayment={handlePayment}
        /> */}
      </Container>
    </div>
  );
}

export default PaymentPage;
