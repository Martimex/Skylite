class Review {

    name;
    surname;
    company_name;
    img_src;
    comment;

    constructor(name: String, surname: String, company_name: String, img_src: String, comment: String) {
        this.name = name;
        this.surname = surname;
        this.company_name = company_name;
        this.img_src = img_src;
        this.comment = comment;
    }
}

export default [
    new Review('Patrick', 'Warren', 'Film Studio', 'photo-1', 'We had given the company a full control over one of our core events and it went all successful! Thanks Skylite Team.'),
    new Review('Amy', 'Herrith', 'Workwear crafts', 'photo-2', 'I love their services, mostly because of their professional approach to my problems. The team has provided me clear and useful instructions to bring into life within my company - and I have to admit that it worked great!'),
    new Review('Tom', 'Swain', 'The guitar mall', 'photo-3', 'Being their loyal customers for over 5 years, we still could not imagine us working with a different company than Skylite.'),
    new Review('Anthony', 'Valks', 'The Super Company', 'photo-4', 'Starting as a small start-up, we were looking for a company that will help with SEO for the newly published site. The Skylite Team has fully met our expectations for relatively low price!'),
    new Review('Sarah', 'Noyle', 'Garden queen', 'photo-5', 'The staff is really helpful and working with them is a pleasure! Will definitely use their services in the future.'),
    new Review('Catherine', 'Mill', 'Best wishes.io', 'photo-6', 'So far so good. I have been using their services twice, and both of them have brought desired results.'),
    new Review('Trevor', 'James', 'Booklib', 'photo-7', `Thanks to Skylite's online advertising offer we had gone for, our online library profits have risen almost twice as much, and now we do feel more than comfortable for the future of our business.`),
    new Review('Oscar', 'Hendrikssen', 'Nord Ship C.O.', 'photo-8', 'Our company was having a solid rebranding some time ago. While my team was able to tackle many challenges on their own, the new logo design was the thing we left for the Skylite. Their prices are affordable and the end result was good.'),
    new Review('Evelyn', 'Smith', 'Angelic boutique', 'photo-9', 'Worked with Skylite several times and I cannot be more satisfied now. The marketing campaigns they managed for me, helped my boutique grow so fast! Thank You so much :)'),
    new Review('Lewis', 'Larson', 'Car spirit', 'photo-10', 'Skylite is just an awesome company to work with. Wide offer, excellent service & professional employees!'),
    new Review('Barbara', 'Blackberg', 'Chem-labs', 'photo-11', 'My first contact with Skylite Team started once I booked a meeting with one of their employees. The contact was quick, and I felt very supported towards our cooperation, which became successful. That is exaclty what I needed.'),
];