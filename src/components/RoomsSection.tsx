import { useTranslation } from 'react-i18next';
import RoomCard from './RoomCard';
import room1 from '@/assets/room-1.jpg';
import room2 from '@/assets/room-2.jpg';

const RoomsSection = () => {
  const { t } = useTranslation();

  const rooms = [
    {
      title: 'Executive Double',
      description: 'A royal stay with our spacious Executive room featuring a comfy bed and modern bathroom.',
      image: room1,
      size: '20 m²',
      guests: 2,
      features: []
    },
    {
      title: 'Deluxe Double',
      description: 'You deserve a little extra pampering. Our Deluxe Double is an extra spacious, luxe room and comfy chair to chill.',
      image: room2,
      size: '22 m²',
      guests: 2,
      features: []
    },
    {
      title: 'Penthouse',
      description: 'Looking for an extraordinary room where anything is possible? Our Penthouse is a unique room with a private terrace and kitchen.',
      image: room1,
      size: '3 bedrooms of 19 m²',
      guests: 4,
      features: []
    }
  ];

  return (
    <section id="rooms" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t('rooms.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t('rooms.description')}
        </p>
      </div>
      
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
