import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Bed, Bath, Wifi, Snowflake, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RoomFeature {
  icon: React.ReactNode;
  label: string;
}

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
  size: string;
  guests: number;
  features: RoomFeature[];
}

const RoomCard = ({ title, description, image, size, guests, features }: RoomCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden bg-card border-border">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-background px-3 py-1 rounded">
          <span className="text-sm font-semibold">{title}</span>
        </div>
      </div>
      
      <CardHeader>
        <CardDescription className="text-foreground/80">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span>{size}</span>
          </div>
          <div className="flex items-center gap-2">
            <Snowflake className="w-4 h-4 text-muted-foreground" />
            <span>Climate control</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span>Private bathroom with shower</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-muted-foreground" />
            <span>Desk</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-muted-foreground" />
            <span>Wi-Fi</span>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold">{guests}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant="outline">
          {t('cta.button')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
