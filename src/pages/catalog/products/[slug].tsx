import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const AddToCardModal = dynamic(
  () => import('@/components/AddToCardModal'),
  { loading: () => <p>Loading...</p> }
);

export default function Product() {
  const router = useRouter();
  const [isAddToCardModalVisible, setIsAddToCardModalVisible] = useState(false);

  function handleAddToCard() {
    setIsAddToCardModalVisible(true);
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCard}>Add to cart</button>

      {isAddToCardModalVisible && <AddToCardModal />}
    </div>
  )
}
