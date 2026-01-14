export type SupportedLanguage = 'en' | 'it' | 'es' | 'ru' | 'zh';

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
  language: SupportedLanguage;
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
    slug: 'best-area-to-stay-in-florence',
    title: 'Best Area to Stay in Florence: A Local\'s Honest Guide',
    description: 'Wondering where to stay in Florence? Locals compare the Oltrarno, Santa Croce, Sant\'Ambrogio, and San Niccolò neighborhoods. Honest advice for first-timers.',
    publishedDate: '2026-01-14',
    lastModified: '2026-01-14',
    author: 'Lorenzo & Lorenzo',
    keywords: ['best area to stay Florence', 'where to stay Florence', 'Florence neighborhoods', 'Oltrarno Florence', 'Santo Spirito Florence', 'Santa Croce Florence', 'Sant Ambrogio Florence', 'Florence accommodation area'],
    language: 'en',
    content: `
First time in Florence and wondering where to stay? Here's what you actually need to know.

## The Secret? Florence is Tiny

Before we dive in, here's the most important thing: Florence is incredibly small. You can walk from one end of the historic center to the other in about 20-25 minutes. So wherever you stay, you won't be far from anything.

That said, neighborhoods do have distinct personalities. Here's our honest breakdown.

## The Oltrarno (Pitti Palace Area) – Our Favorite

This is the area south of the Arno river, around Palazzo Pitti and Piazza Santo Spirito. It's where we're based, so we're biased – but we're biased for good reasons.

**Why people love it:**
- Quieter than the main tourist center
- More authentic, local vibe
- Amazing restaurants where Florentines actually eat
- 10-minute walk to Ponte Vecchio
- Best aperitivo spots with river views
- Artisan workshops still operating
- Great for couples and those who like charm

**The vibe:** Walking by the river in the morning is peaceful. At night, Piazza Santo Spirito comes alive with locals and visitors sharing drinks and conversation. It's lively but not chaotic.

**Perfect for:** Couples, honeymooners, anyone who wants charm + quiet but still wants to be close to everything.

## Santa Croce Area – In the Heart of It

This is the area around the Basilica di Santa Croce, east of the Duomo.

**Why people like it:**
- Super central location
- Close to everything
- Good restaurant options
- Feels like "classic Florence"

**The reality:** It can be noisy. Some streets are popular with exchange students and have more of a party vibe. If you're light sleepers, choose your exact street carefully.

**Perfect for:** People who want to be in the middle of the action.

## Sant'Ambrogio Area – Local and Practical

Northeast of Santa Croce, around the Sant'Ambrogio market.

**Why it works:**
- Daily food market (great for self-catering)
- More residential feel
- Still walkable to Duomo (10-15 min)
- Often better prices

**The trade-off:** Slightly less "postcard Florence" feel, but very practical for longer stays.

**Perfect for:** Travelers who like markets and cooking, or anyone staying longer than a few days.

## San Niccolò – The Hidden Gem

This is our home neighborhood, technically part of the Oltrarno but with its own identity.

**What makes it special:**
- Between Ponte Vecchio and Piazzale Michelangelo
- Ancient city walls and gates
- Local trattorias and wine bars
- Feels like a village inside the city
- Perfect base for sunset walks to the viewpoint

**Perfect for:** Anyone who wants authentic Florence without sacrificing convenience.

## Our Honest Advice

**If you want quiet + charm:** Oltrarno (Santo Spirito, San Niccolò)

**If you want central + convenient:** Santa Croce area (but check the exact street)

**If you're practical + budget-conscious:** Sant'Ambrogio

**For honeymooners:** Oltrarno, hands down

Remember: Florence is so walkable that "location" matters less than in bigger cities. A 15-minute walk feels like nothing when every street is beautiful.

## One More Thing

Wherever you stay, you'll be fine. The historic center is compact and safe. Pick a place that fits your budget and style – the neighborhood will take care of itself.

We've been hosting guests in San Niccolò and the Oltrarno for years. If you want specific recommendations, just ask.
`
  },
  {
    id: '6',
    slug: 'oltrarno-florence-guide',
    title: 'Oltrarno Florence: Why Locals Live Here (And You Should Stay Here)',
    description: 'Discover the Oltrarno, Florence\'s authentic left bank neighborhood. Santo Spirito, Palazzo Pitti, artisan workshops – the real Florence that tourists often miss.',
    publishedDate: '2026-01-14',
    lastModified: '2026-01-14',
    author: 'Lorenzo & Lorenzo',
    keywords: ['Oltrarno Florence', 'Santo Spirito Florence', 'left bank Florence', 'Florence artisan quarter', 'Palazzo Pitti neighborhood', 'where locals live Florence'],
    language: 'en',
    content: `
Cross the Ponte Vecchio and you enter a different Florence. The Oltrarno – literally "beyond the Arno" – is where the city breathes.

## What is the Oltrarno?

The Oltrarno is everything south of the Arno river. It includes neighborhoods like Santo Spirito, San Frediano, and San Niccolò. Historically, this was the artisan quarter – home to craftsmen, workshops, and working-class Florentines.

Today it's where you'll find the best mix of authentic local life and Renaissance grandeur.

## Why It Feels Different

**North of the river:** Tour groups, souvenir shops, lines for the Uffizi.

**South of the river:** Italians walking their dogs, workshops still hammering away, conversations over coffee.

The Oltrarno has tourists, sure. But it has kept its soul.

## What You'll Find Here

**Piazza Santo Spirito**
The heart of the neighborhood. A morning market, kids playing, old men on benches. At night, the bars and restaurants fill up and it becomes the best aperitivo spot in Florence.

**Artisan Workshops**
This is still a working neighborhood. You'll pass workshops restoring antique furniture, making leather goods the old way, crafting gold jewelry. Some have been in the same families for generations.

**The Boboli Gardens**
Behind Palazzo Pitti, these Renaissance gardens climb the hillside. A perfect escape when you need green space.

**San Niccolò**
Our home base. A village within the city, tucked between the ancient walls and the river. Narrow streets, local wine bars, the path up to Piazzale Michelangelo.

## Where to Eat

We won't name specific restaurants (locals guard their favorites), but here's what to look for:

- Places with handwritten menus
- Spots where staff speak Italian first
- Anywhere with older Florentines eating at 1 PM
- Trattorias on side streets, not main squares

The Oltrarno has some of Florence's best food, often at better prices than across the river.

## The Morning Walk

Start at Ponte Vecchio. Cross to the south side. Walk along the river toward San Niccolò. Stop for coffee. Continue to Piazzale Michelangelo if you're feeling energetic.

Do this at 8 AM and you'll understand why people fall in love with Florence.

## The Evening Scene

The Oltrarno comes alive after 6 PM. Santo Spirito fills with people having aperitivo. San Frediano's wine bars get crowded. The streetlights turn on and the stone buildings glow orange.

It's not party atmosphere – it's civilized enjoyment of food, drink, and conversation.

## Is It Right for You?

**Yes if:**
- You want authentic over convenient
- You prefer charm to efficiency
- You like walking
- You want to feel like a temporary local

**Maybe not if:**
- You need to be steps from the Duomo
- You want maximum nightlife
- Walking 10 minutes feels like a lot

## Getting There

From the train station, it's a 20-minute walk or short taxi/bus ride. Once you're here, everything is on foot.

Our apartments in San Niccolò put you in the heart of the Oltrarno while keeping you 10 minutes from Ponte Vecchio. Best of both worlds.
`
  },
  {
    id: '7',
    slug: 'florence-first-time-visitor-tips',
    title: '10 Things I Wish I Knew Before Visiting Florence',
    description: 'First time in Florence? Practical tips from locals: it\'s smaller than you think, where to actually eat, how to avoid crowds, and what most guides don\'t tell you.',
    publishedDate: '2026-01-14',
    lastModified: '2026-01-14',
    author: 'Lorenzo & Lorenzo',
    keywords: ['Florence first time', 'Florence tips', 'visiting Florence advice', 'Florence travel tips', 'what to know Florence', 'Florence tourist advice'],
    language: 'en',
    content: `
We've hosted thousands of guests in Florence. Here's what they all wish they'd known before arriving.

## 1. It's Smaller Than You Think

This surprises everyone. You can walk from the train station to Piazzale Michelangelo (covering most major sights) in about 45 minutes. The "historic center" where you'll spend 90% of your time is maybe 15 minutes across.

**What this means:** Don't stress about location. Anywhere central is fine.

## 2. Skip the Restaurants on Main Squares

That trattoria with the great view of the Duomo? It's probably mediocre and overpriced. Florentines eat on side streets, in places with no English menu out front.

**Rule of thumb:** If there's a guy outside trying to seat you, walk past.

## 3. Gelato Quality Varies Wildly

Those bright, piled-high displays? Often artificial. Look for gelato that's stored in covered metal containers. The colors should be natural – pistachio is brownish-green, not bright green.

## 4. The Tourist Tax is Real

You'll pay €4-6 per person per night (depending on accommodation type) on top of your booking. It's not a scam – it's city law. Budget for it.

## 5. August is Empty (and Hot)

Florentines leave in August. Many local restaurants close. It's brutally hot. If you visit then, embrace the slow pace – it's almost like having the city to yourself.

## 6. Book the Uffizi in Advance

Seriously. Months in advance if you're visiting in high season. Same goes for the Accademia (David). Standing in line for hours is not a good use of your time.

## 7. The Oltrarno is Better

Most tourists stay north of the river and only cross for Palazzo Pitti. Mistake. The south bank (Oltrarno) has better restaurants, quieter streets, and more local atmosphere. Consider staying there.

## 8. Parking in the Center is (Almost) Impossible

The historic center is a ZTL (limited traffic zone). Drive in without permission and you'll get fined. If you have a car, park outside and walk in. We can help with this.

## 9. Coffee is Cheap (If You Drink at the Bar)

Stand at the bar: €1-1.50 for an espresso. Sit at a table: €3-5 for the same thing. Italians stand. It's also faster and more social.

## 10. Three Days is Enough (But Five is Better)

You can see the major sights in 2-3 days. But Florence is best experienced slowly – morning coffee, afternoon wandering, evening aperitivo. Give yourself time to do nothing.

## Bonus: What We Tell All Our Guests

- Walk to Piazzale Michelangelo for sunset (not sunrise – the light is wrong)
- Cross the river and get lost in Santo Spirito
- Don't eat before 7:30 PM like the tourists do
- The side streets are more interesting than the main ones
- If it feels too touristy, walk 2 blocks in any direction

Florence rewards curiosity. The best experiences aren't in guidebooks.
`
  }
];

export const getBlogPost = (slug: string, language: SupportedLanguage = 'en'): BlogPost | undefined => {
  // First try to find post in the requested language
  let post = blogPosts.find(p => p.slug === slug && p.language === language);
  // Fall back to English if not found
  if (!post) {
    post = blogPosts.find(p => p.slug === slug && p.language === 'en');
  }
  return post;
};

export const getAllBlogPosts = (language: SupportedLanguage = 'en'): BlogPost[] => {
  // Get posts in requested language, fall back to English for posts without translation
  const slugsInLanguage = new Set(
    blogPosts.filter(p => p.language === language).map(p => p.slug)
  );

  const postsInLanguage = blogPosts.filter(p => p.language === language);
  const englishFallbacks = blogPosts.filter(
    p => p.language === 'en' && !slugsInLanguage.has(p.slug)
  );

  return [...postsInLanguage, ...englishFallbacks].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};
