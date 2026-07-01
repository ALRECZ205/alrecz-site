import React from 'react';
import CRTOverlay from './components/CRTOverlay';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import FeaturedExhibition from './components/FeaturedExhibition';
import GalleryRail from './components/GalleryRail';
import CollectionGrid from './components/CollectionGrid';
import ImmersiveBreak from './components/ImmersiveBreak';
import ArchiveIndex from './components/ArchiveIndex';
import Footer from './components/Footer';
import { Artwork } from './types';

// --- MOCK DATA ---
const ARTWORKS: Artwork[] = [
  { 
    id: '1', 
    title: 'D.A. Dolla', 
    artist: 'I$H', 
   image: '/images/art/DASH.jpg',
    year: '2026', 
    medium: 'Digital Art', 
    category: 'DIGITAL',
    description: 'Screwloo$e', 
    archiveCode: 'ARC-001',
    location: 'MAIN HALL',
    status: 'EXHIBITING'
  },
  { 
    id: '2', 
    title: '729/Greetings', 
    artist: 'I$H', 
    image: '/images/art/729.jpg',
    year: '2025', 
    medium: 'Digital Illustration', 
    category: 'Album Cover', 
    archiveCode: 'ARC-002'
  },
  { 
    id: '3',
    title: 'Hollywood Cole', 
    artist: 'I$H', 
    image: '/images/art/Jv2.jpg',
    year: '2024', 
    medium: 'digital Illustration',
    category: 'Artist Study',
    archiveCode: 'ARC-003'
  },
  { 
    id: '4', 
    title: 'DHL', 
    artist: 'I$H', 
    image: '/images/art/dhl.jpg',
    year: '2022', 
    medium: 'Digital Illustration/Interavtive Media.', 
    category: 'Album Cover',
    archiveCode: 'ARC-004'
  },
  { 
    id: '5', 
    title: 'Kids $ee Gho$t', 
    artist: 'I$H', 
    image: '/images/art/gero.jpg',
    year: '2021', 
    medium: 'Digital Illustration/Interactive Media', 
    category: 'Album Cover',
    archiveCode: 'ARC-005'
  },
  { 
    id: '6', 
    title: 'L.L.FREDO', 
    artist: 'I$H', 
    image: '/images/art/fredo.jpg',
    year: '2019', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-006'
  },
  { 
    id: '7', 
    title: 'P.P.& Demon Slayin', 
    artist: 'I$H', 
    image: '/images/art/cudi.jpg', 
    year: '2019', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-007'
  },
  { 
    id: '8', 
    title: 'Ye Always Been Ye', 
    artist: 'I$H', 
    image: '/images/art/oldye.jpg',
    year: '2018', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-008'
  },
  { 
    id: '9', 
    title: 'Cartoons & Cereal', 
    artist: 'I$H', 
   image: '/images/art/ctac.jpg',
    year: '2026', 
    medium: 'Digital Art', 
    category: 'DIGITAL',
    description: 'GKMC', 
    archiveCode: 'ARC-009',
    location: 'Artist Study',
    status: 'EXHIBITING'
  },
  { 
    id: '10', 
    title: '3 Stripes', 
    artist: 'I$H', 
    image: '/images/art/adidas1.jpg',
    year: '2014', 
    medium: 'Digital Illustration', 
    category: 'Brand Art', 
    archiveCode: 'ARC-010'
  },
  { 
    id: '11',
    title: 'Queen & the Sun', 
    artist: 'I$H', 
    image: '/images/art/Yonce.jpg',
    year: '2016', 
    medium: 'digital Illustration',
    category: 'Artist Study',
    archiveCode: 'ARC-011'
  },
  { 
    id: '12', 
    title: 'The Mind & the Moon', 
    artist: 'I$H', 
    image: '/images/art/Solange.jpg',
    year: '2016', 
    medium: 'Digital Illustration',
    category: 'Artist Study',
    archiveCode: 'ARC-012'
  },
  { 
    id: '13', 
    title: 'B L O N D E',
    artist: 'I$H', 
    image: '/images/art/Frank.jpg',
    year: '2015',
    medium: 'Digital Illustration',
    category: 'Artist Study',
    archiveCode: 'ARC-013' 
  },
  { 
    id: '14',
    title: 'FAMOUS',
    artist: 'I$H', 
    image: '/images/art/YB.jpg',
    year: '2015',
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-014'
  },
  { 
    id: '15', 
    title: 'Long Live JAH', 
    artist: 'I$H', 
    image: '/images/art/xxx.jpg', 
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-015'
  },
  { 
    id: '16', 
    title: 'GO 4 BROKE', 
    artist: 'I$H', 
    image: '/images/art/wynt.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-016'
  },
  { 
    id: '17', 
    title: 'The L.O.V.E.', 
    artist: 'I$H', 
   image: '/images/art/waw.jpg',
    year: '2014', 
    medium: 'Digital Art', 
    category: 'Album Cover',
    description: 'Art cover for a tape i dropped lolo', 
    archiveCode: 'ARC-017',
    location: 'Album Cover',
    status: 'EXHIBITING'
  },
  { 
    id: '18', 
    title: 'W. Grassella/ No Cigs', 
    artist: 'I$H', 
    image: '/images/art/WG.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study', 
    archiveCode: 'ARC-018'
  },
  { 
    id: '19',
    title: 'Vultures', 
    artist: 'I$H', 
    image: '/images/art/Vultures.jpg',
    year: '2024', 
    medium: 'digital Illustration',
    category: 'Artist Study',
    archiveCode: 'ARC-019'
  },
  { 
    id: '20', 
    title: '48', 
    artist: 'I$H', 
    image: '/images/art/48.jpg',
    year: '2015', 
    medium: 'Digital Illustration',
    category: 'Artist Study',
    archiveCode: 'ARC-020'
  },
  { 
    id: '21', 
    title: 'Birds in the Trap',
    artist: 'I$H', 
    image: '/images/art/Travis.jpg',
    year: '2015',
    medium: 'Digital Illustration',
    category: 'Artist Study',
    archiveCode: 'ARC-021' 
  },
  { 
    id: '22',
    title: 'Swiss Africa',
    artist: 'I$H', 
    image: '/images/art/BD.jpg',
    year: '2023',
    medium: 'Digital Illustration', 
    category: 'Poster',
    archiveCode: 'ARC-022'
  },
  { 
    id: '23', 
    title: 'Met Galla FUTURE', 
    artist: 'I$H', 
    image: '/images/art/SF.jpg', 
    year: '2026', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-023'
  },
  { 
    id: '24', 
    title: 'STEAMBOAT BILLY', 
    artist: 'I$H/AlRECz + Steamboat Billy', 
    image: '/images/art/SBB.jpg',
    year: '2024', 
    medium: 'Digital Illustration', 
    category: 'Pop Surrealism',
    archiveCode: 'ARC-024'
  },
  { 
    id: '25', 
    title: 'For Us By Us', 
    artist: 'I$H', 
    image: '/images/art/Solange1.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-025'
  },
{ 
    id: '26', 
    title: 'Miseducated', 
    artist: 'I$H', 
    image: '/images/art/Lauryn Hill 1.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-026'
  },
  { 
    id: '27', 
    title: 'The Heart Pt. 4', 
    artist: 'I$H', 
    image: '/images/art/KKE.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-027'
  },
  { 
    id: '28', 
    title: '1017', 
    artist: 'I$H', 
    image: '/images/art/SAGM.jpg',
    year: '2016', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-028'
  },
  { 
    id: '29', 
    title: 'ACID AWKWRD', 
    artist: 'I$H', 
    image: '/images/art/SAC.jpg',
    year: '2014', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-029'
  },
  { 
    id: '30', 
    title: 'LKE A DYMND', 
    artist: 'I$H', 
    image: '/images/art/RiRi.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-030'
  },
  { 
    id: '31', 
    title: 'Fear No Evil', 
    artist: 'I$H', 
    image: '/images/art/CNTRL.jpg',
    year: '2013', 
    medium: 'Digital Illustration', 
    category: 'Experimental',
    archiveCode: 'ARC-031'
  },
  { 
    id: '32', 
    title: 'Eat the Rich', 
    artist: 'I$H', 
    image: '/images/art/Parasite.jpg',
    year: '2024', 
    medium: 'RISO Print', 
    category: 'RISO',
    archiveCode: 'ARC-032'
  },
  { 
    id: '33', 
    title: 'P A P E R', 
    artist: 'I$H', 
    image: '/images/art/pnln.jpg',
    year: '2017', 
    medium: 'Digital illuastration', 
    category: '205',
    archiveCode: 'ARC-033'
  },
  { 
    id: '34', 
    title: 'New Earl', 
    artist: 'I$H', 
    image: '/images/art/New Earl.jpg',
    year: '2019', 
    medium: 'Digital illuastration', 
    category: 'Artist Study',
    archiveCode: 'ARC-034'
  },
  { 
    id: '35', 
    title: 'The Basment 6', 
    artist: 'I$H', 
    image: '/images/art/TB6.jpg',
    year: '2019', 
    medium: 'Digital illuastration', 
    category: 'Poster',
    archiveCode: 'ARC-035'
  },
  { 
    id: '36', 
    title: 'Lost Boyz 5', 
    artist: 'I$H', 
    image: '/images/art/lb5.jpg',
    year: '2017', 
    medium: 'Digital illuastration', 
    category: 'Album Cover',
    archiveCode: 'ARC-036'
  },
  { 
    id: '37', 
    title: 'Lightspeed Lance', 
    artist: 'I$H', 
    image: '/images/art/LR.jpg',
    year: '2024', 
    medium: 'Digital illuastration', 
    category: 'Artist Study',
    archiveCode: 'ARC-037'
  },
  { 
    id: '38', 
    title: 'Kids $ee Gho$t', 
    artist: 'I$H', 
    image: '/images/art/KSG.jpg',
    year: '2020', 
    medium: 'Digital illuastration', 
    category: 'Experimental',
    archiveCode: 'ARC-038'
  },
  { 
    id: '39', 
    title: 'Art, Brews, & Shoes', 
    artist: 'I$H', 
    image: '/images/art/kicks.jpg',
    year: '2018', 
    medium: 'Digital illuastration', 
    category: 'Poster',
    archiveCode: 'ARC-039'
  },
  { 
    id: '40', 
    title: 'Yeezu$', 
    artist: 'I$H', 
    image: '/images/art/YEclouds.jpg',
    year: '2029', 
    medium: 'Digital illuastration', 
    category: 'Artist Study',
    archiveCode: 'ARC-040'
  },
  { 
    id: '41', 
    title: 'B4 The BADA$$', 
    artist: 'I$H', 
    image: '/images/art/Joey2.jpg',
    year: '2017', 
    medium: 'Digital illuastration', 
    category: 'Artist Study',
    archiveCode: 'ARC-041'
  },
  { 
    id: '42', 
    title: 'JOEY TRAP', 
    artist: 'I$H', 
    image: '/images/art/Joey Trap11.jpg',
    year: '2017', 
    medium: 'Digital illuastration', 
    category: 'Artist Study',
    archiveCode: 'ARC-042'
  },
  { 
    id: '43', 
    title: '$tay Ready', 
    artist: 'I$H', 
    image: '/images/art/JA.jpg',
    year: '2015', 
    medium: 'Digital illuastration', 
    category: 'Artist Study',
    archiveCode: 'ARC-043'
  },
  { 
    id: '44', 
    title: 'WTFISGOINGON!?', 
    artist: 'I$H', 
    image: '/images/art/ISHStory.jpg',
    year: '2023', 
    medium: 'Digital illuastration', 
    category: 'Animation Storyboard',
    archiveCode: 'ARC-044'
  },
  { 
    id: '45', 
    title: 'Free Lunch', 
    artist: 'I$H', 
    image: '/images/art/ZAYWOP.jpg',
    year: '2017', 
    medium: 'Digital illuastration', 
    category: 'Artist Study',
    archiveCode: 'ARC-045'
  },
  { 
    id: '46', 
    title: 'G.O.O.D. A.M.', 
    artist: 'I$H', 
    image: '/images/art/GOOD AM.jpg',
    year: '2022', 
    medium: 'Lithograph', 
    category: 'AEVAI Committe Award',
    archiveCode: 'ARC-046'
  },
  { 
    id: '47', 
    title: 'Goku & Bulma', 
    artist: 'I$H', 
    image: '/images/art/GAB.jpg',
    year: '2014', 
    medium: 'Digital Illustration', 
    category: 'Personal Study',
    archiveCode: 'ARC-047'
  },
  { 
    id: '48', 
    title: 'An Ode 2 Hip-Hop', 
    artist: 'I$H', 
    image: '/images/art/EB.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-048'
  },
  {
  id: '49', 
    title: 'The MESSAGE', 
    artist: 'I$H', 
    image: '/images/art/DH.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-049'
  },
  {
  id: '50', 
    title: 'COMBO BREAKER', 
    artist: 'I$H', 
    image: '/images/art/HARU.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Album Art',
    archiveCode: 'ARC-050'
  },
  {
  id: '51', 
    title: 'Teach Me How', 
    artist: 'I$H', 
    image: '/images/art/RCP.jpg',
    year: '2021', 
    medium: 'RISO PRINT', 
    category: 'RISO',
    archiveCode: 'ARC-051'
  },
  {
  id: '52', 
    title: 'Live Deliciously', 
    artist: 'I$H', 
    image: '/images/art/TW.jpg',
    year: '2021', 
    medium: 'RISO PRINT', 
    category: 'RISO PRINT',
    archiveCode: 'ARC-052'
  },
  {
  id: '53', 
    title: 'Envoriment Fractured 1', 
    artist: 'I$H', 
    image: '/images/art/EF1.jpg',
    year: '2022', 
    medium: 'Mixed Media', 
    category: 'Experimental',
    archiveCode: 'ARC-053'
  },
  {
  id: '54', 
    title: 'Enviroment Fractuired 2', 
    artist: 'I$H', 
    image: '/images/art/EF2.jpg',
    year: '2021', 
    medium: 'Mixed Media', 
    category: 'Experimental',
    archiveCode: 'ARC-054'
  },
  {
  id: '55', 
    title: 'Enviroment Fractured 3', 
    artist: 'I$H', 
    image: '/images/art/EF3.jpg',
    year: '2021', 
    medium: 'Mixed Media', 
    category: 'Experimental',
    archiveCode: 'ARC-055'
  },
  {
  id: '56', 
    title: 'Just Do It.', 
    artist: 'I$H', 
    image: '/images/art/JDI.jpg',
    year: '2021', 
    medium: 'Marker on paper', 
    category: 'Experimental',
    archiveCode: 'ARC-056'
  },
  {
  id: '57', 
    title: 'A Spark of Creativity', 
    artist: 'I$H', 
    image: '/images/art/CC.jpg',
    year: '2021', 
    medium: 'Conte Crayon on paper', 
    category: 'Experimental',
    archiveCode: 'ARC-057'
  },
  {
  id: '58', 
    title: 'Beauty Is...', 
    artist: 'I$H', 
    image: '/images/art/CC2.jpg',
    year: '2021', 
    medium: 'Conte Crayon on paper', 
    category: 'Experimental',
    archiveCode: 'ARC-058'
  },
  {
  id: '59', 
    title: 'Fade Pt.1', 
    artist: 'I$H', 
    image: '/images/art/Boogie.jpg',
    year: '2021', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-059'
  },
  {
  id: '60', 
    title: 'Conorus The Teminator', 
    artist: 'I$H', 
    image: '/images/art/CTT.jpg',
    year: '2021', 
    medium: 'Digital Illustration', 
    category: 'Experimental',
    archiveCode: 'ARC-060'
  },
  {
  id: '61', 
    title: '$uace Fest!', 
    artist: 'I$H', 
    image: '/images/art/SF1.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Event Flyer',
    archiveCode: 'ARC-061'
  },
  {
  id: '62', 
    title: 'FREDA!', 
    artist: 'I$H', 
    image: '/images/art/Freda.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Commission',
    archiveCode: 'ARC-062'
  },
  {
  id: '63', 
    title: 'Chano from 79th', 
    artist: 'I$H', 
    image: '/images/art/Chance1.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Commission',
    archiveCode: 'ARC-063'
  },
  {
  id: '64', 
    title: '#STILL in the C1UB', 
    artist: 'I$H', 
    image: '/images/art/STILL.jpg',
    year: '2014', 
    medium: 'Digital Illustration', 
    category: 'Commission',
    archiveCode: 'ARC-064'
  },
  {
  id: '65', 
    title: 'BREEZY', 
    artist: 'I$H', 
    image: '/images/art/chris brown.jpg',
    year: '2014', 
    medium: 'Digital Illustration', 
    category: 'Commission',
    archiveCode: 'ARC-065'
  },
  {
  id: '66', 
    title: 'Dr. Whoever', 
    artist: 'I$H', 
    image: '/images/art/Amine.jpg',
    year: '2018', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-066'
  },
  {
  id: '67', 
    title: 'SIIFU', 
    artist: 'I$H', 
    image: '/images/art/siifu.jpg',
    year: '2019', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-067'
  },
  {
  id: '68', 
    title: 'No Problems', 
    artist: 'I$H', 
    image: '/images/art/6lack.jpg',
    year: '2018', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-068'
  },
  {
  id: '69', 
    title: 'Workin out', 
    artist: 'I$H', 
    image: '/images/art/jid.jpg',
    year: '2016', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-069'
  },
  {
  id: '70', 
    title: 'YE Draft', 
    artist: 'I$H', 
    image: '/images/art/YE.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-070'
  },
  {
  id: '71', 
    title: 'Who u Foolin', 
    artist: 'I$H', 
    image: '/images/art/gunna.jpg',
    year: '2016', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-071'
  },
  {
  id: '73', 
    title: 'After Def', 
    artist: 'I$H', 
    image: '/images/art/drew.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-073'
  },
  {
  id: '74', 
    title: 'Dylan The Teen', 
    artist: 'I$H', 
    image: '/images/art/dtt.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-074'
  },
  {
  id: '75', 
    title: 'I aint comin down', 
    artist: 'I$H', 
    image: '/images/art/iacd Tm.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Album Cover Commission',
    archiveCode: 'ARC-075'
  },
  {
  id: '76', 
    title: 'Love More <3', 
    artist: 'I$H', 
    image: '/images/art/luv moor.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-076'
  },
  {
  id: '77', 
    title: 'XXX', 
    artist: 'I$H', 
    image: '/images/art/xxx1.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-077'
  },
  {
  id: '78', 
    title: 'Itz Been Awful', 
    artist: 'I$H', 
    image: '/images/art/ir.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-078'
  },
  {
  id: '79', 
    title: 'The Basement 4', 
    artist: 'I$H', 
    image: '/images/art/tb4.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Event Flyer Commission',
    archiveCode: 'ARC-079'
  },
  {
  id: '80', 
    title: 'Scotty!!!', 
    artist: 'I$H', 
    image: '/images/art/Scotty ATL.jpg',
    year: '2017', 
    medium: 'Digital Illustration', 
    category: 'Artist Commission',
    archiveCode: 'ARC-080'
  },
  {
  id: '81', 
    title: 'ADU', 
    artist: 'I$H', 
    image: '/images/art/Sade 2.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Commission',
    archiveCode: 'ARC-081'
  },
  {
  id: '82', 
    title: 'Gustav Elijah Åhr', 
    artist: 'I$H', 
    image: '/images/art/peep.jpg',
    year: '2016', 
    medium: 'Digital Illustration', 
    category: 'Artist Commission',
    archiveCode: 'ARC-083'
  },
  {
  id: '83', 
    title: 'Ms. Jackson', 
    artist: 'I$H', 
    image: '/images/art/andre.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Commission',
    archiveCode: 'ARC-083'
  },
  {
  id: '84', 
    title: 'Awaken My Love', 
    artist: 'I$H', 
    image: '/images/art/Gambino.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Commission',
    archiveCode: 'ARC-084'
  },
  {
  id: '85', 
    title: 'An Ode 2 OBK', 
    artist: 'I$H', 
    image: '/images/art/obk.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Commission',
    archiveCode: 'ARC-084'
  },
  {
  id: '86', 
    title: 'Foolish Tendencies', 
    artist: 'I$H', 
    image: '/images/art/4Strikes.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Character Design',
    archiveCode: 'ARC-086'
  },
  {
  id: '87', 
    title: 'Baby King$ton Blevz', 
    artist: 'I$H', 
    image: '/images/art/bkb.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-087'
  },
  {
  id: '88', 
    title: 'Long Live Dolph', 
    artist: 'I$H', 
    image: '/images/art/Dolph.jpg',
    year: '2019', 
    medium: 'Digital Illustration', 
    category: 'Artist Study',
    archiveCode: 'ARC-088'
  },
  {
  id: '89', 
    title: 'The Basement 7', 
    artist: 'I$H', 
    image: '/images/art/LL.jpg',
    year: '2019', 
    medium: 'Digital Illustration', 
    category: 'Event Flyer Commission',
    archiveCode: 'ARC-089'
  },
  {
  id: '90', 
    title: '$tand down, or be cut down.', 
    artist: 'I$H', 
    image: '/images/art/Sheeba.jpg',
    year: '2019', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-090'
  },
  {
  id: '91', 
    title: 'The Carti Who Laughs', 
    artist: 'I$H', 
    image: '/images/art/TCWL.jpg',
    year: '2024', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-091'
  },
  {
  id: '92', 
    title: 'The Custom Queen', 
    artist: 'I$H', 
    image: '/images/art/Bionca2.jpg',
    year: '2024', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-092'
  },
  {
  id: '93', 
    title: 'Get $$$', 
    artist: 'I$H', 
    image: '/images/art/DRAM.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-093'
  },
  {
  id: '94', 
    title: 'Drink More Water', 
    artist: 'I$H', 
    image: '/images/art/mick.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-094'
  },
  {
  id: '95', 
    title: 'Sweest Taboo', 
    artist: 'I$H', 
    image: '/images/art/sade.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-095'
  },
  {
  id: '96', 
    title: 'Behold', 
    artist: 'I$H', 
    image: '/images/art/behold.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-096'
  },
  {
  id: '97', 
    title: 'Sremm Life', 
    artist: 'I$H', 
    image: '/images/art/rae2.jpg',
    year: '2015', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-097'
  },
  {
  id: '98', 
    title: 'ALWYS AWKWRD', 
    artist: 'I$H', 
    image: '/images/art/Amine Sak.jpg',
    year: '2014', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-098'
  },
  {
  id: '99', 
    title: 'Retro Wingz', 
    artist: 'I$H', 
    image: '/images/art/Jorda 1.jpg',
    year: '2013', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-099'
  },
  {
  id: '100', 
    title: 'Lucid Dreams', 
    artist: 'I$H', 
    image: '/images/art/Juice wrld rip.jpg',
    year: '2018', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-100'
  },
  {
  id: '101', 
    title: 'Triple 6 Paul', 
    artist: 'I$H', 
    image: '/images/art/DJ Paul.jpg',
    year: '2018', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-101'
  },
  {
  id: '102', 
    title: 'Views', 
    artist: 'I$H', 
    image: '/images/art/tower.jpg',
    year: '2021', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-102'
  },
  {
  id: '103', 
    title: 'The Dark One', 
    artist: 'I$H', 
    image: '/images/art/meech.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-103'
  },
  {
  id: '104', 
    title: 'On Purpo$e', 
    artist: 'I$H', 
    image: '/images/art/MEL.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-104'
  },
  {
  id: '105', 
    title: 'Bae', 
    artist: 'I$H', 
    image: '/images/art/doja.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-105'
  },
  {
  id: '106', 
    title: 'Big Stepper', 
    artist: 'I$H', 
    image: '/images/art/kk.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-106'
  },
  {
  id: '107', 
    title: 'The Heart Pt.6', 
    artist: 'I$H', 
    image: '/images/art/King Kenny.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-107'
  },
  {
  id: '108', 
    title: '3 sides of the same nigga', 
    artist: 'I$H', 
    image: '/images/art/paco.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-108'
  },
  {
  id: '109', 
    title: 'RICH!', 
    artist: 'I$H', 
    image: '/images/art/rich homie quan.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-109'
  },
  {
  id: '110', 
    title: 'Call me $3x', 
    artist: 'I$H', 
    image: '/images/art/thugger.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-110'
  },
  {
  id: '111', 
    title: 'LEAN', 
    artist: 'I$H', 
    image: '/images/art/Sean Lean.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-111'
  },
  {
  id: '112', 
    title: 'J A C K', 
    artist: 'I$H', 
    image: '/images/art/jack2.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-112'
  },
  {
  id: '113', 
    title: 'Hoodfamou$', 
    artist: 'I$H', 
    image: '/images/art/HT.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-113'
  },
  {
  id: '114', 
    title: 'Spiccoli', 
    artist: 'I$H', 
    image: '/images/art/ivan.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-114'
  },
  {
  id: '115', 
    title: 'C. Pnazek', 
    artist: 'I$H', 
    image: '/images/art/cole.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-115'
  },
  {
  id: '116', 
    title: 'Lost Boyz 1', 
    artist: 'I$H', 
    image: '/images/art/LostBoyz/lb1.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-116'
  },
  {
  id: '117', 
    title: 'Lost Boyz 2', 
    artist: 'I$H', 
    image: '/images/art/LostBoyz/lb2.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-117'
  },
  {
  id: '118', 
    title: 'Lost Boyz 5', 
    artist: 'I$H', 
    image: '/images/art/LostBoyz/lb5.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-118'
  },
  {
  id: '119', 
    title: 'Lost Boyz 9', 
    artist: 'I$H', 
    image: '/images/art/LostBoyz/lb9.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-119'
  },
   {
  id: '120', 
    title: 'Lost Boyz 10', 
    artist: 'I$H', 
    image: '/images/art/LostBoyz/lb10.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-120'
  },
  {
  id: '121', 
    title: 'Lost Boyz 14', 
    artist: 'I$H', 
    image: '/images/art/LostBoyz/lb14.jpg',
    year: '2023', 
    medium: 'Digital Illustration', 
    category: 'Commission Request',
    archiveCode: 'ARC-121'
  },
];


const LOST_BOYZ_ARTWORKS = ARTWORKS.filter(art =>
  ['116', '117', '118', '119', '120', '121', '004', '005'].includes(art.id)
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-alrecz-black text-alrecz-offwhite font-sans selection:bg-alrecz-blood selection:text-white cursor-none">
      <CustomCursor />
      <CRTOverlay />

      <main className="w-full overflow-hidden">
        <HeroSection />

        <FeaturedExhibition />

        <GalleryRail
          title="Current Transmissions"
          artworks={ARTWORKS.slice(1, 6)}
        />

        
<GalleryRail
  title="Lost Boyz Collection"
  artworks={LOST_BOYZ_ARTWORKS}
  autoScroll={true}
/>

        <CollectionGrid artworks={ARTWORKS} />

        <ImmersiveBreak />
        <ArchiveIndex />
      </main>

      <Footer />
    </div>
  );
};

export default App;