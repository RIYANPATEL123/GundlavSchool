// JavaScript for responsive navigation menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

// Video Speed Control (adjusted to be set in code only)
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('myVideo');

    if (videoElement) {
        // Set the video playback rate to 1.5x (can be changed to any desired value)
        videoElement.playbackRate = 2.0; // Video will play at 1.5 times normal speed
        // console.log("Video playback rate set to:", videoElement.playbackRate);
    } else {
        // console.error("Video element with ID 'myVideo' not found.");
    }
});

// JavaScript for image carousel (kept for future use, not currently in HTML)
let currentImageIndex = 0;
let carouselInterval; // Declare carouselInterval globally

// Function to display the correct image in the carousel
function showImage(index) {
    const images = document.getElementById('carouselImages');
    if (!images) {
        // console.error("Carousel images container not found. Carousel functions will not execute.");
        return; // Exit if element not found
    }
    const totalImages = images.children.length;

    if (index >= totalImages) {
        currentImageIndex = 0; // Loop back to the first image
    } else if (index < 0) {
        currentImageIndex = totalImages - 1; // Loop to the last image
    } else {
        currentImageIndex = index;
    }
    // Apply transform to slide the images
    images.style.transform = `translateX(${-currentImageIndex * 100}%)`;
}

// Function to move the carousel left or right
function moveCarousel(direction) {
    showImage(currentImageIndex + direction);
}

// Function to start the automatic carousel rotation
function startCarouselAutoPlay() {
    const images = document.getElementById('carouselImages');
    if (!images) {
        return; // Do not start if carousel is not present
    }
    // Clear any existing interval to prevent multiple intervals running
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        moveCarousel(1); // Move to the next image
    }, 5000); // Change image every 5 seconds (5000 milliseconds)
}

// Event listeners to pause/resume auto-play on hover
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval)); // Pause on mouse enter
        carouselContainer.addEventListener('mouseleave', startCarouselAutoPlay); // Resume on mouse leave
    }

    // Start auto-play when the page loads if carousel exists
    startCarouselAutoPlay();
});


// Ensure carousel images re-align correctly on window resize
window.addEventListener('resize', () => {
    const images = document.getElementById('carouselImages');
    if (images) { // Only re-align if carousel is present
        showImage(currentImageIndex); // Re-align the current image on resize
    }
});

// Language translation
let currentLanguage = 'en'; // Default language

const translations = {
    en: {
        schoolTitle: "Gundlav Primary School",
        announcementMarquee: "Gundlav Primary School is selected for \"School of Excellence\" by Gujarat Government",
        navHome: "Home",
        navAdministration: "Administration",
        dropdownTeacherInfo: "Teacher Info",
        dropdownTeacherPhoto: "Teacher Photo",
        navTeacherCorner: "Teacher Corner",
        dropdownStudentAttendance: "Student Attendance",
        navStudentCorner: "Student Corner",
        dropdownForm: "Form",
        dropdownGshala: "G-shala",
        navSchoolActivity: "School Activity",
        dropdownMathsScience: "Maths Science Activity",
        dropdownBestOutWaste: "Best out of Waste",
        dropdownDayCelebration: "Day Celebration",
        navDonation: "Donation",
        dropdownGooglePay: "Google Pay",
        navUploadZone: "Upload Zone",
        dropdownUploadImageCaption: "Upload Image & Caption",
        navAboutUs: "About Us",
        navSocialMedia: "Social Media",
        dropdownGmail: "G-mail",
        dropdownFacebook: "Facebook",
        dropdownTwitter: "Twitter",
        dropdownYouTube: "YouTube",
        navContactUs: "Contact Us",
        schoolCampusOverviewTitle: "School Campus Overview",
        aboutSchoolTitle: "About Gundlav Primary School",
        aboutListItem1: "Established in 1955 and managed by a Local Body.",
        aboutListItem2: "Located in a Rural area within the Valsad block of Valsad district, Gujarat.",
        aboutListItem3: "Offers education for Grade Balvatika & 1 to 8.",
        aboutListItem4: "Gujarati is the medium of instruction.",
        aboutListItem5: "Academic session commences in June.",
        aboutListItem6: "Operates from a Government building with 19 functional classrooms.",
        aboutListItem7: "Equipped with functional tap water and toilets.",
        aboutListItem8: "Includes a dedicated playground and a library.",
        quoteText: "\"Education is not the filling of a pail, but the lighting of a fire.\" - W.B. Yeats",
        learnMoreBtn: "Learn More About Us",
        ourMomentsTitle: "Our Moments",
        galleryCaption1: "Baal Mela: Creative coloring fun!",
        galleryCaption2: "TLM Celebration Day 1 (22/07/2023): Engaging with learning materials.",
        galleryCaption3: "Baal Mela activities: Art and craft displays by young artists.",
        galleryCaption4: "Community interaction and address during an event.",
        galleryCaption5: "Joyful celebration with children and adults.",
        galleryCaption6: "Happy moments with children in party hats.",
        galleryCaption7: "Students engaged in a green initiative, tending to plants.",
        galleryCaption8: "Indoor gathering of students for an assembly or event.",
        galleryCaption9: "Independence Day celebrations at the school.",
        galleryCaption10: "Patriotic fervor during Independence Day.",
        galleryCaption11: "Students proudly waving the Indian flag.",
        galleryCaption12: "Creative Rangoli designs with patriotic themes.",
        galleryCaption13: "Life Skills Fair: Practical learning activities on 03/08/2024.",
        galleryCaption14: "Interactive smartboard lesson in progress.",
        galleryCaption15: "Gundlav Primary School's pride: NMMS Scholarship Achievers.",
        galleryCaption16: "Taluka-level Kabbadi tournament at PD Patel High School, Valsad.",
        galleryCaption17: "Skills on Wheels: Vocational education awareness.",
        galleryCaption18: "Self-defense training participants.",
        galleryCaption19: "Patriotic formation with flags.",
        galleryCaption20: "Nursery visit for plant learning.",
        galleryCaption21: "Creative Teaching-Learning Materials (TLM).",
        galleryCaption22: "World Yoga Day celebration.",
        galleryCaption23: "Art Utsav: Celebrating Gujarati culture.",
        galleryCaption24: "Language Corner: Interactive learning.",
        galleryCaption25: "National Science Day presentation.",
        galleryCaption26: "Students presenting a handmade project.",
        galleryCaption27: "Students planting a tree.",
        galleryCaption28: "Presenting a smart city model.",
        galleryCaption29: "Outdoor learning session.",
        galleryCaption30: "Good Teachers know how to bring out the best in \"Students\"",
        galleryCaption31: "‘I never teach my pupils; I only attempt to provide the conditions in which they can learn.’ –Albert Einstein",
        galleryCaption32: "Transformative education for those who learn differently.",
        galleryCaption33: "Preparing responsible citizens and effective leaders.",
        galleryCaption34: "Making a difference for our future. Opportunity, Innovation, Success.",
        galleryCaption35: "Inspiring Students with Distinction. Learn with passion to live with purpose.",
        galleryCaption36: "Students in Valsad learn about fire safety and rescue.",
        galleryCaption37: "Award winners at the 'Science Fair' in Valsad.",
        galleryCaption38: "Students engaged in a hands-on science experiment.",
        galleryCaption39: "Young students conducting an outdoor science experiment.",
        galleryCaption40: "Students collaborating on a classroom science project.",
        galleryCaption41: "Students learning to use a telescope for astronomy.",
        galleryCaption42: "Students on an educational trip at the Gujarat Vidhan Sabha.",
        galleryCaption43: "A student operates a scientific instrument with guidance.",
        galleryCaption44: "Students observe a tool demonstration outdoors.",
        galleryCaption45: "Young girls learning human anatomy with a skeleton model.",
        galleryCaption46: "Students excitedly pose in front of an 'I ❤️ Science' sign.",
        galleryCaption47: "Students observe a model airplane display at a science exhibit.",
        galleryCaption48: "A student interacts with an educational quiz on a large screen.",
        galleryCaption49: "Students observe a solar power demonstration.",
        galleryCaption50: "Students wearing 3D glasses watch a presentation.",
        galleryCaption51: "A student practices using a fire extinguisher.",
        galleryCaption52: "Girls intently watch a science demonstration.",
        galleryCaption53: "Students pose in front of a large Hanuman statue.",
        galleryCaption54: "Students engage in a hands-on learning activity in a classroom.",
        galleryCaption55: "A group of students gather in front of a large statue.",
        galleryCaption56: "Adults supervise students engaged in a classroom activity.",
        galleryCaption57: "Girls learn 'Data Science' on computers in a lab.",
        galleryCaption58: "Students work on repairing a bicycle wheel.",
        galleryCaption59: "Students learn hands-on bicycle repair.",
        galleryCaption60: "A girl in safety glasses learns to use a tool.",
        galleryCaption61: "Students in Valsad engage in a group activity or presentation in their classroom.",
        footerContactUsTitle: "Contact Us",
        footerPrincipal: "Principal: Rajeshkumar B. Patel",
        footerPhone: "Phone: +91 7573037127",
        footerEmailText: "Email",
        footerAddress: "Address: Gundlav Primary School, Valsad, Gujarat, India",
        footerUsefulLinksTitle: "Useful Links",
        footerLinkHome: "Home",
        footerLinkTeacherInfo: "Teacher Info",
        footerLinkStudentAttendance: "Student Attendance",
        footerLinkGshala: "G-shala",
        footerLinkUploadImageCaption: "Upload Image & Caption",
        footerLinkContactUs: "Contact Us",
        footerFollowUsTitle: "Follow Us",
        footerCopyright: "© 2025 Gundlav Primary School. All rights reserved.",
        footerDesignedBy: "Designed and Maintained by Riyan Patel",
        newsitem1:"✨  A parent's Conference was held at Gundlav Primary School on 23rd June 2025! 📚",
        newsitem2:"🎉  Girl's Educaiton and School Entrance Festival will be held at Gundlav Primary School on 26 June 2025!🏅"
    },
    gu: {
        schoolTitle: "ગુંદલાવ પ્રાથમિક શાળા",
        announcementMarquee: "ગુંદલાવ પ્રાથમિક શાળાને ગુજરાત સરકાર દ્વારા \"સેન્ટર ઓફ એક્સલન્સ\" તરીકે પસંદ કરવામાં આવી છે",
        navHome: "ઘર",
        navAdministration: "વહીવટ",
        dropdownTeacherInfo: "શિક્ષક માહિતી",
        dropdownTeacherPhoto: "શિક્ષક ફોટો",
        navTeacherCorner: "શિક્ષક કોર્નર",
        dropdownStudentAttendance: "વિદ્યાર્થી હાજરી",
        navStudentCorner: "વિદ્યાર્થી કોર્નર",
        dropdownForm: "ફોર્મ",
        dropdownGshala: "જી-શાળા",
        navSchoolActivity: "શાળા પ્રવૃત્તિ",
        dropdownMathsScience: "ગણિત વિજ્ઞાન પ્રવૃત્તિ",
        dropdownBestOutWaste: "બેસ્ટ આઉટ ઓફ વેસ્ટ",
        dropdownDayCelebration: "દિવસની ઉજવણી",
        navDonation: "દાન",
        dropdownGooglePay: "ગૂગલ પે",
        navUploadZone: "અપલોડ ઝોન",
        dropdownUploadImageCaption: "છબી અને કેપ્શન અપલોડ કરો",
        navAboutUs: "અમારા વિશે",
        navSocialMedia: "સોશિયલ મીડિયા",
        dropdownGmail: "જી-મેલ",
        dropdownFacebook: "ફેસબુક",
        dropdownTwitter: "ટ્વિટર",
        dropdownYouTube: "યુટ્યુબ",
        navContactUs: "અમારો સંપર્ક કરો",
        schoolCampusOverviewTitle: "શાળા કેમ્પસ ઝાંખી",
        aboutSchoolTitle: "ગુંદલાવ પ્રાથમિક શાળા વિશે",
        aboutListItem1: "૧૯૫૫ માં સ્થાપના અને સ્થાનિક સંસ્થા દ્વારા સંચાલિત.",
        aboutListItem2: "વલસાડ જિલ્લાના વલસાડ બ્લોકમાં ગ્રામીણ વિસ્તારમાં આવેલી છે.",
        aboutListItem3: "બાલવાટિકા અને ધોરણ ૧ થી ૮ સુધીનું શિક્ષણ પૂરું પાડે છે.",
        aboutListItem4: "શિક્ષણનું માધ્યમ ગુજરાતી છે.",
        aboutListItem5: "શૈક્ષણિક સત્ર જૂનમાં શરૂ થાય છે.",
        aboutListItem6: "૧૯ કાર્યકારી વર્ગખંડો સાથે સરકારી ઇમારતમાંથી કાર્યરત છે.",
        aboutListItem7: "કાર્યકારી નળના પાણી અને શૌચાલયથી સજ્જ.",
        aboutListItem8: "એક સમર્પિત રમતનું મેદાન અને એક પુસ્તકાલયનો સમાવેશ થાય છે.",
        quoteText: "\"શિક્ષણ એ ડોલ ભરવાનું નથી, પરંતુ અગ્નિ પ્રગટાવવાનું છે.\" - ડબલ્યુ.બી. યેટ્સ",
        learnMoreBtn: "અમારા વિશે વધુ જાણો",
        ourMomentsTitle: "અમારી પળો",
        galleryCaption1: "બાલમેળો: સર્જનાત્મક રંગકામની મજા!",
        galleryCaption2: "TLM ઉજવણી દિવસ 1 (૨૨/૦૭/૨૦૨૩): શીખવાની સામગ્રી સાથે જોડાણ.",
        galleryCaption3: "બાલમેળાની પ્રવૃત્તિઓ: યુવા કલાકારો દ્વારા કલા અને હસ્તકલા પ્રદર્શનો.",
        galleryCaption4: "એક કાર્યક્રમ દરમિયાન સમુદાયનો સંપર્ક અને સંબોધન.",
        galleryCaption5: "બાળકો અને પુખ્ત વયના લોકો સાથે આનંદમય ઉજવણી.",
        galleryCaption6: "પાર્ટી ટોપીઓમાં બાળકો સાથે ખુશ ક્ષણો.",
        galleryCaption7: "વિદ્યાર્થીઓ હરિયાળી પહેલમાં રોકાયેલા, છોડની સંભાળ રાખતા.",
        galleryCaption8: "એસેમ્બલી અથવા કાર્યક્રમ માટે વિદ્યાર્થીઓનું ઇન્ડોર ભેગા થવું.",
        galleryCaption9: "શાળામાં સ્વતંત્રતા દિવસની ઉજવણી.",
        galleryCaption10: "સ્વતંત્રતા દિવસ દરમિયાન દેશભક્તિનો ઉત્સાહ.",
        galleryCaption11: "વિદ્યાર્થીઓ ગર્વભેર ભારતીય ધ્વજ લહેરાવતા.",
        galleryCaption12: "દેશભક્તિની થીમ સાથે સર્જનાત્મક રંગોળી ડિઝાઇન.",
        galleryCaption13: "લાઇફ સ્કિલ્સ ફેર: ૦૩/૦૮/૨૦૨૪ ના રોજ વ્યવહારુ શીખવાની પ્રવૃત્તિઓ.",
        galleryCaption14: "ઇન્ટરેક્ટિવ સ્માર્ટબોર્ડ પાઠ પ્રગતિમાં છે.",
        galleryCaption15: "ગુંદલાવ પ્રાથમિક શાળાનું ગૌરવ: NMMS શિષ્યવૃત્તિ વિજેતાઓ.",
        galleryCaption16: "પી.ડી. પટેલ હાઈસ્કૂલ, વલસાડ ખાતે તાલુકા કક્ષાની કબડ્ડી ટુર્નામેન્ટ.",
        galleryCaption17: "સ્કિલ્સ ઓન વ્હીલ્સ: વ્યવસાયિક શિક્ષણ જાગૃતિ.",
        galleryCaption18: "સ્વ-બચાવ તાલીમમાં ભાગ લેનારાઓ.",
        galleryCaption19: "ધ્વજ સાથે દેશભક્તિનું નિર્માણ.",
        galleryCaption20: "છોડ શીખવા માટે નર્સરીની મુલાકાત.",
        galleryCaption21: "ક્રિએટિવ ટીચિંગ-લર્નિંગ મટિરિયલ્સ (TLM).",
        galleryCaption22: "વિશ્વ યોગ દિવસની ઉજવણી.",
        galleryCaption23: "આર્ટ ઉત્સવ: ગુજરાતી સંસ્કૃતિની ઉજવણી.",
        galleryCaption24: "ભાષા કોર્નર: ઇન્ટરેક્ટિવ લર્નિંગ.",
        galleryCaption25: "રાષ્ટ્રીય વિજ્ઞાન દિવસનું પ્રસ્તુતિકરણ.",
        galleryCaption26: "વિદ્યાર્થીઓ હાથથી બનાવેલો પ્રોજેક્ટ રજૂ કરતા.",
        galleryCaption27: "વિદ્યાર્થીઓ વૃક્ષારોપણ કરતા.",
        galleryCaption28: "સ્માર્ટ સિટી મોડેલ રજૂ કરતા.",
        galleryCaption29: "આઉટડોર લર્નિંગ સેશન.",
        galleryCaption30: "સારા શિક્ષકો જાણે છે કે 'વિદ્યાર્થીઓ' માંથી શ્રેષ્ઠ કેવી રીતે બહાર લાવવું.",
        galleryCaption31: "‘હું મારા વિદ્યાર્થીઓને ક્યારેય શીખવતો નથી; હું ફક્ત એવી પરિસ્થિતિઓ પ્રદાન કરવાનો પ્રયાસ કરું છું જેમાં તેઓ શીખી શકે.’ – આલ્બર્ટ આઇન્સ્ટાઇન",
        galleryCaption32: "જેઓ અલગ રીતે શીખે છે તેમના માટે પરિવર્તનશીલ શિક્ષણ.",
        galleryCaption33: "જવાબદાર નાગરિકો અને અસરકારક નેતાઓ તૈયાર કરવા.",
        galleryCaption34: "આપણા ભવિષ્ય માટે પરિવર્તન લાવવું. તક, નવીનતા, સફળતા.",
        galleryCaption35: "વિશિષ્ટતા સાથે વિદ્યાર્થીઓને પ્રેરણા આપવી. ઉદ્દેશ્ય સાથે જીવવા માટે ઉત્સાહથી શીખો.",
        galleryCaption36: "વિદ્યાર્થીઓ વાંસદામાં અગ્નિ સલામતી અને બચાવ વિશે શીખે છે.",
        galleryCaption37: "વાંસદાના 'વિજ્ઞાન મેળા'માં પુરસ્કાર વિજેતાઓ.",
        galleryCaption38: "વિદ્યાર્થીઓ પ્રાયોગિક વિજ્ઞાન પ્રયોગમાં રોકાયેલા છે.",
        galleryCaption39: "યુવા વિદ્યાર્થીઓ બહાર વિજ્ઞાન પ્રયોગ કરી રહ્યા છે.",
        galleryCaption40: "વર્ગખંડના વિજ્ઞાન પ્રોજેક્ટ પર સહયોગ કરતા વિદ્યાર્થીઓ.",
        galleryCaption41: "વિદ્યાર્થીઓ ખગોળશાસ્ત્ર માટે ટેલિસ્કોપનો ઉપયોગ કરતા શીખે છે.",
        galleryCaption42: "ગુજરાત વિધાનસભા ખાતે શૈક્ષણિક પ્રવાસે વિદ્યાર્થીઓ.",
        galleryCaption43: "એક વિદ્યાર્થી માર્ગદર્શન સાથે વૈજ્ઞાનિક સાધન ચલાવે છે.",
        galleryCaption44: "વિદ્યાર્થીઓ બહાર એક સાધન નિદર્શન જુએ છે.",
        galleryCaption45: "યુવતીઓ હાડપિંજર મોડેલ સાથે માનવ શરીર રચના શીખે છે.",
        galleryCaption46: "વિદ્યાર્થીઓ 'I ❤️ Science' સાઈન સામે ઉત્સાહપૂર્વક પોઝ આપે છે.",
        galleryCaption47: "વિદ્યાર્થીઓ વિજ્ઞાન પ્રદર્શનમાં વિમાન મોડેલ જુએ છે.",
        galleryCaption48: "એક વિદ્યાર્થી મોટી સ્ક્રીન પર શૈક્ષણિક ક્વિઝ સાથે વાર્તાલાપ કરે છે.",
        galleryCaption49: "વિદ્યાર્થીઓ સૌર ઉર્જા નિદર્શનનું અવલોકન કરે છે.",
        galleryCaption50: "વિદ્યાર્થીઓ 3D ચશ્મા પહેરીને પ્રસ્તુતિ જુએ છે.",
        galleryCaption51: "એક વિદ્યાર્થી અગ્નિશામકનો ઉપયોગ કરવાનો અભ્યાસ કરે છે.",
        galleryCaption52: "છોકરીઓ ધ્યાનપૂર્વક વિજ્ઞાન નિદર્શન જુએ છે.",
        galleryCaption53: "વિદ્યાર્થીઓ હનુમાનજીની વિશાળ પ્રતિમા સામે પોઝ આપે છે.",
        galleryCaption54: "વિદ્યાર્થીઓ વર્ગખંડમાં પ્રાયોગિક શીખવાની પ્રવૃત્તિમાં જોડાય છે.",
        galleryCaption55: "વિદ્યાર્થીઓ એક મોટી પ્રતિમા સામે એકઠા થાય છે.",
        galleryCaption56: "વર્ગખંડની પ્રવૃત્તિમાં વિદ્યાર્થીઓની દેખરેખ રાખતા પુખ્ત વયના લોકો.",
        galleryCaption57: "છોકરીઓ લેબમાં કમ્પ્યુટર પર 'ડેટા સાયન્સ' શીખે છે.",
        galleryCaption58: "વિદ્યાર્થીઓ સાયકલના પૈડાને સુધારવાનું કામ કરે છે.",
        galleryCaption59: "વિદ્યાર્થીઓ સાયકલ રિપેરિંગ શીખે છે.",
        galleryCaption60: "સલામતી ચશ્મા પહેરેલી એક છોકરી સાધનનો ઉપયોગ કરતા શીખે છે.",
        galleryCaption61: "વાંસદાના વિદ્યાર્થીઓ તેમના વર્ગખંડમાં એક જૂથ પ્રવૃત્તિ અથવા પ્રસ્તુતિમાં જોડાયેલા છે.",
        footerContactUsTitle: "અમારો સંપર્ક કરો",
        footerPrincipal: "આચાર્ય: રાજેશકુમાર બી. પટેલ",
        footerPhone: "ફોન: +91 7573037127",
        footerEmailText: "ઇમેઇલ",
        footerAddress: "સરનામું: ગુંદલાવ પ્રાથમિક શાળા, વલસાડ, ગુજરાત, ભારત",
        footerUsefulLinksTitle: "ઉપયોગી લિંક્સ",
        footerLinkHome: "ઘર",
        footerLinkTeacherInfo: "શિક્ષક માહિતી",
        footerLinkStudentAttendance: "વિદ્યાર્થી હાજરી",
        footerLinkGshala: "જી-શાળા",
        footerLinkUploadImageCaption: "છબી અને કેપ્શન અપલોડ કરો",
        footerLinkContactUs: "અમારો સંપર્ક કરો",
        footerFollowUsTitle: "અમને અનુસરો",
        footerCopyright: "© 2025 ગુંદલાવ પ્રાથમિક શાળા. સર્વ હક સુરક્ષિત.",
        footerDesignedBy: "રિયાન પટેલ દ્વારા ડિઝાઇન અને જાળવણી",
        newsitem1: "✨  ૨૩ જૂન ૨૦૨૫ ના રોજ ગુંદલાવ પ્રાથમિક શાળામાં વાલી સંમેલન યોજાયું ! 📚",
        newsitem2: "🎉  કન્યા કેણવણી અને શાળા પ્રવેશોત્સવ ૨૬ જૂન ૨૦૨૫ ના રોજ ગુંદલાવ પ્રાથમિક શાળા ખાતે યોજાશે!🏅"
    }
};

function updateContent(lang) {
    for (const id in translations[lang]) {
        const element = document.getElementById(id);
        if (element) {
            // Special handling for elements like <a> tags where textContent might replace children (like <i> for icons)
            // For most text elements, directly setting textContent is fine.
            // For navigation links and buttons that might have child elements,
            // ensure we're targeting the direct text or innerText.
            // A simpler way for this demo is to just set textContent.
            // The language button text is handled specifically.

            if (id === "languageButtonText") {
                element.textContent = translations[lang][id];
            } else if (element.tagName === "A" || element.tagName === "BUTTON") {
                // For links/buttons, directly update textContent if it doesn't break other elements (like icons)
                // This assumes icons are separate and not part of the text node that gets replaced.
                // If the button has an icon AND text, we only want to change the text part.
                // For this structure, textContent works if the icon is a sibling, not nested within the text.
                // If it contains an icon, we might need to be more precise.
                // For this example, let's assume the text is the direct child for simplicity.
                 // Check if the element contains a Font Awesome icon
                const icon = element.querySelector('.fa, .fas, .fab');
                if (icon) {
                    // If it has an icon, only update the text node that is not the icon
                    // This is a more robust way for buttons/links with icons
                    Array.from(element.childNodes).forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                            node.textContent = translations[lang][id];
                        }
                    });
                     // Special handling for navigation dropdown buttons (e.g., Administration)
                     // If the element has a text node and an icon, update the text node.
                     if (element.id && (element.id.startsWith("nav") || element.id.startsWith("dropdown"))) {
                        // Find the direct text node to update, ignoring the icon
                        let textNodeFound = false;
                        for (let i = 0; i < element.childNodes.length; i++) {
                            const node = element.childNodes[i];
                            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                                node.textContent = translations[lang][id];
                                textNodeFound = true;
                                break;
                            }
                        }
                        if (!textNodeFound) {
                            // Fallback if no direct text node found (e.g., text is inside a span that is directly the element's child)
                            element.textContent = translations[lang][id];
                        }
                    } else {
                        element.textContent = translations[lang][id];
                    }
                } else {
                     element.textContent = translations[lang][id];
                }
            }
             else {
                element.textContent = translations[lang][id];
            }
        }
    }
}


// Function to toggle language button text and website content
function toggleLanguage() {
    const languageButtonTextSpan = document.getElementById('languageButtonText');
    if (currentLanguage === 'en') {
        currentLanguage = 'gu';
        languageButtonTextSpan.textContent = "English"; // Change button text to indicate option to switch to English
    } else {
        currentLanguage = 'en';
        languageButtonTextSpan.textContent = "ગુજરાતી"; // Change button text to indicate option to switch to Gujarati
    }
    updateContent(currentLanguage);
}

// Initial content update on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language button text based on currentLanguage
    const languageButtonTextSpan = document.getElementById('languageButtonText');
    if (languageButtonTextSpan) {
        if (currentLanguage === 'en') {
            languageButtonTextSpan.textContent = "ગુજરાતી";
        } else {
            languageButtonTextSpan.textContent = "English";
        }
    }
    updateContent(currentLanguage); // Update all translatable content based on initial currentLanguage
});