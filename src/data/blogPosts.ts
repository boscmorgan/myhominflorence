export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedDate: string;
  lastModified: string;
  author: string;
  keywords: string[];
  language: 'en' | 'it';
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'parking-in-florence-ztl-guide',
    title: 'Where to Park in Florence: A Complete Guide to ZTL and Parking Options',
    description: 'Comprehensive guide to parking in Florence, Italy. Learn about ZTL zones, affordable parking options, and how to avoid fines when visiting Florence.',
    publishedDate: '2026-01-10',
    lastModified: '2026-01-13',
    author: 'Lorenzo & Lorenzo',
    keywords: ['Florence parking', 'ZTL Florence', 'parking Florence center', 'Florence ZTL zones', 'where to park Florence', 'Florence parking fees'],
    language: 'en',
    content: `
Florence's historic center is protected by ZTL (Zona a Traffico Limitato) - restricted traffic zones. Here's what you need to know:

## What is the Florence ZTL?

The ZTL is a restricted area in Florence's historic center where only authorized vehicles can enter. Cameras monitor all entry points, and unauthorized entry results in fines starting at €80-100.

## When is ZTL Active?

- **Weekdays**: 7:30 AM - 8:00 PM
- **Saturdays**: 7:30 AM - 4:00 PM
- **Sundays**: Usually inactive (but check current regulations)

## Best Parking Options

**1. Park Outside ZTL**
We recommend parking outside the restricted zone. Many affordable options exist just beyond the ZTL perimeter, within walking distance of the center.

**2. Our Parking Service**
We offer secure parking near Florence at competitive rates:
- €20 per day
- €120 per week
- Located outside ZTL, easy walking distance to attractions

**3. Public Parking Garages**
- Parterre: €2/hour, outside ZTL
- Fortezza Fiera: €2/hour, near Santa Maria Novella station
- Villa Costanza: Free parking + tram to center (€1.50)

## Tips to Avoid Fines

1. Never drive into the center without ZTL authorization
2. If staying at accommodations in the ZTL, ask your host to register your license plate
3. Park outside ZTL and walk or use public transport
4. Check ZTL signs carefully - boundaries can be confusing

## Public Transport from Parking

Florence has excellent public transport. Park outside and take:
- Tram to city center (€1.50)
- Local buses (€1.50)
- Walk (15-20 minutes from most parking areas)

Contact us for specific parking recommendations for your stay.
`
  },
  {
    id: '2',
    slug: 'san-niccolo-neighborhood-guide',
    title: 'San Niccolò Florence: A Local\'s Guide to the Best Neighborhood',
    description: 'Discover San Niccolò, Florence\'s authentic neighborhood. Local restaurants, hidden gems, and why this area is perfect for your Florence stay.',
    publishedDate: '2026-01-11',
    lastModified: '2026-01-13',
    author: 'Lorenzo & Lorenzo',
    keywords: ['San Niccolò Florence', 'Florence neighborhoods', 'where to stay Florence', 'Oltrarno Florence', 'Florence local area'],
    language: 'en',
    content: `
San Niccolò is one of Florence's most authentic neighborhoods, located in the Oltrarno district between Ponte Vecchio and Piazzale Michelangelo.

## Why San Niccolò?

Unlike the crowded tourist center, San Niccolò offers authentic Florentine life while being just 5 minutes walk from major attractions.

**Location Benefits:**
- 5-minute walk to Ponte Vecchio
- 10-minute walk to Uffizi Gallery
- 15-minute walk to Duomo
- Direct access to Piazzale Michelangelo viewpoint

## Local Favorites

**Restaurants & Trattorias:**
- Traditional Tuscan cuisine
- Local prices (not tourist traps)
- Where Florentines actually eat

**Cafes & Bars:**
- Morning espresso with locals
- Aperitivo spots with river views
- Authentic Italian café culture

## What Makes It Special

San Niccolò maintains its residential character. You'll see:
- Local artisan workshops
- Family-run shops
- Neighbors chatting in the street
- Real Florence life

## Perfect for Visitors

This neighborhood offers the best of both worlds:
- Close to all major attractions
- Authentic local atmosphere
- Quieter streets in the evening
- Better value accommodations
- Easy parking access (outside ZTL)

Our apartments are located in Via di San Niccolò, placing you in the heart of this authentic neighborhood while keeping you steps from Florence's most famous sites.
`
  },
  {
    id: '3',
    slug: 'florence-tourist-tax-explained',
    title: 'Florence Tourist Tax (Tassa di Soggiorno): Complete Guide',
    description: 'Everything you need to know about Florence\'s tourist tax. Rates, payment, exemptions, and what to expect when booking accommodation in Florence.',
    publishedDate: '2026-01-12',
    lastModified: '2026-01-13',
    author: 'Lorenzo & Lorenzo',
    keywords: ['Florence tourist tax', 'tassa di soggiorno Firenze', 'Florence accommodation tax', 'tourist tax Florence rates'],
    language: 'en',
    content: `
All visitors to Florence must pay a tourist tax (tassa di soggiorno). Here's everything you need to know.

## Current Rates (2026)

Tourist tax varies by accommodation type and season:

**High Season (April-October):**
- Hotels 4-5 star: €5.00 per person/night
- Hotels 1-3 star, B&Bs: €4.50 per person/night
- Apartments, vacation rentals: €4.00 per person/night

**Low Season (November-March):**
- Rates typically €0.50-1.00 lower per night

Maximum: 7 consecutive nights per stay.

## Who Pays?

- All guests over 12 years old
- Children under 12: exempt
- Residents of Florence: exempt

## How to Pay

The tourist tax is:
- Paid directly to your accommodation provider
- NOT included in booking platform prices (Airbnb, Booking.com)
- Collected in cash or card at check-in
- Required by law

## What It Funds

Your tourist tax supports:
- Maintenance of historic monuments
- Tourism infrastructure
- Public services for visitors
- Cultural heritage preservation

## Booking Direct Advantage

When you book direct with us:
- Clear communication about total costs
- No surprise fees
- Help with payment process
- Official receipt provided

## Important Notes

1. Always budget for tourist tax separately from accommodation costs
2. Hosts must collect it by law
3. Keep your receipt for your records
4. Tax is per person, per night (not per room)

Questions about tourist tax? Contact us before booking for exact costs.
`
  },
  {
    id: '4',
    slug: 'airbnb-vs-direct-booking-florence',
    title: 'Booking Direct vs Airbnb in Florence: Why Direct is Better',
    description: 'Compare booking direct versus using Airbnb in Florence. Save money, get better service, and support local hosts by booking directly.',
    publishedDate: '2026-01-13',
    lastModified: '2026-01-13',
    author: 'Lorenzo & Lorenzo',
    keywords: ['book direct Florence', 'Airbnb Florence', 'Florence accommodation booking', 'direct booking benefits'],
    language: 'en',
    content: `
Should you book through Airbnb or directly with hosts? Here's an honest comparison based on our experience as Florence property managers.

## Cost Comparison

**Airbnb/Booking.com:**
- 14-18% service fee (added to your cost)
- 3-5% host fee (reduces host revenue)
- Higher prices to cover platform fees

**Direct Booking:**
- No platform fees
- 10-15% lower total cost
- Same accommodation, better price

**Example:** A €100/night room becomes €115+ on Airbnb after fees.

## Service & Communication

**Through Platforms:**
- Delayed responses (platform message systems)
- Limited pre-arrival information
- Generic automated messages

**Direct Booking:**
- Immediate communication (WhatsApp, email, phone)
- Detailed arrival instructions
- Personal recommendations
- Direct relationship with hosts

## Flexibility

**Platform Bookings:**
- Strict cancellation policies
- Platform rules override host preferences
- Limited modification options

**Direct Bookings:**
- More flexible arrangements
- Easier date changes
- Direct negotiation possible
- Personal relationship allows flexibility

## For Hosts

**Platform Fees Impact:**
- Hosts lose 15-20% to fees
- Less money for property improvements
- Higher prices necessary to compensate

**Direct Bookings Help:**
- Support local businesses
- Money stays with hosts
- Better maintained properties
- More sustainable tourism

## How to Book Direct

1. Find properties on platforms
2. Search for host's direct website (like myhomeinflorence.com)
3. Compare prices
4. Contact directly
5. Save money, get better service

## Our Guarantee

Book direct with us:
- Same quality (see our 1700+ Airbnb reviews)
- Lower prices
- Better communication
- Personal service
- Support local Florence business

We're on Airbnb for visibility, but we prefer direct bookings. It's better for you, better for us, and better for Florence.
`
  },
  {
    id: '5',
    slug: 'florence-self-check-in-guide',
    title: 'Self Check-in in Florence: How It Works and What to Expect',
    description: 'Learn about self check-in for Florence accommodations. Modern, convenient, and flexible arrival system explained by local hosts.',
    publishedDate: '2026-01-13',
    lastModified: '2026-01-13',
    author: 'Lorenzo & Lorenzo',
    keywords: ['Florence self check-in', 'key box Florence', 'late check-in Florence', 'flexible check-in'],
    language: 'en',
    content: `
Self check-in is increasingly common in Florence. Here's how it works and why it's often better than traditional reception desk check-in.

## What is Self Check-in?

Self check-in means collecting your keys independently without meeting the host in person. You receive detailed instructions and access codes.

## How It Works

**Before Arrival:**
1. Receive detailed instructions via email/WhatsApp
2. Get access codes for key box or smart lock
3. Receive building entry codes if needed

**On Arrival:**
1. Locate the key box (exact address provided)
2. Enter your code
3. Retrieve keys
4. Access your accommodation

**Takes 2-3 minutes total.**

## Benefits

**For You:**
- Flexible arrival time (even late at night)
- No waiting for host availability
- No rushed meetings after long travel
- Private, independent arrival

**No Disadvantages:**
- Hosts provide phone support if needed
- Instructions are very clear
- System is simple and reliable

## Common Questions

**"What if I can't find the key box?"**
- Detailed photos provided
- Phone support available 24/7
- Instructions include landmarks

**"What if the code doesn't work?"**
- Rare, but we're available by phone
- Backup arrangements in place
- Never locked out

**"How do I ask questions?"**
- WhatsApp/phone available
- Usually faster than in-person meetings
- Detailed written information provided

## Why Hosts Use Self Check-in

1. **Flexibility:** No coordination of arrival times
2. **Efficiency:** Better for guests and hosts
3. **Reliability:** No missed connections or delays
4. **Professional:** Modern hospitality standard

## Our Self Check-in System

We've perfected self check-in:
- Clear instructions sent 48 hours before arrival
- Photos of exact key box location
- Building access codes
- 24/7 phone support
- Backup contacts
- Welcome information in apartment

**Over 1,700 guests have successfully self-checked in with us.**

## Traditional vs Self Check-in

Traditional check-in requires:
- Coordinating arrival time
- Waiting if delayed
- Rushing if early
- In-person meeting (when you want to rest)

Self check-in gives you:
- Complete flexibility
- No waiting
- Privacy
- Independence

Most guests prefer self check-in once they try it. It's the modern way to travel.
`
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};
