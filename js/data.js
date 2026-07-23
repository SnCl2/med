// Nanhikali Care & Adoption Support India - Core Data Store

// Standardized single images per category for optimum performance & consistency
const CATEGORY_IMAGES = {
  hospitalHub: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
  childPatient: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=500&q=80",
  doctorAvatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
};

const regionalHubs = [
  {
    id: "guwahati",
    name: "Apollo Hospital Regional Center, Guwahati",
    city: "Guwahati",
    state: "Assam",
    pincode: "781005",
    address: "Adjacent to Apollo Hospitals, Lotus Tower, G.S. Road, Christian Basti, Guwahati",
    phone: "+91 92170 27691",
    email: "guwahati@nanhikali-india.org",
    image: CATEGORY_IMAGES.hospitalHub,
    beds: 45,
    doctorsCount: 12,
    activeCases: 10
  },
  {
    id: "kolkata",
    name: "Apollo Gleneagles Medical Hub, Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700054",
    address: "58, Canal Circular Road, Kadapara, Phool Bagan, Kolkata",
    phone: "+91 86383 27760",
    email: "kolkata@nanhikali-india.org",
    image: CATEGORY_IMAGES.hospitalHub,
    beds: 60,
    doctorsCount: 15,
    activeCases: 12
  },
  {
    id: "barpeta",
    name: "FAAMCH Child Care Wing, Barpeta",
    city: "Barpeta",
    state: "Assam",
    pincode: "781301",
    address: "Near FAAMCH, Jyoti Gaon, Jania Road, Barpeta",
    phone: "+91 92170 27691",
    email: "barpeta@nanhikali-india.org",
    image: CATEGORY_IMAGES.hospitalHub,
    beds: 30,
    doctorsCount: 8,
    activeCases: 8
  },
  {
    id: "hyderabad",
    name: "Apollo Hospital Jubilee Hills, Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500033",
    address: "Road No 72, Jubilee Hills, Hyderabad",
    phone: "+91 40 2360 7777",
    email: "hyderabad@nanhikali-india.org",
    image: CATEGORY_IMAGES.hospitalHub,
    beds: 50,
    doctorsCount: 10,
    activeCases: 0
  }
];

const childProfiles = [

  {
    id: "NK-102",
    name: "Ananya Roy",
    gender: "girl",
    age: "1.2 Years",
    category: "Adoption & Care",
    location: "kolkata",
    hospital: "Apollo Gleneagles, Kolkata",
    condition: "Post-Premature Respiratory Care & Adoption Hold",
    estimatedCost: 45000,
    raisedAmount: 38000,
    image: "assets/child/child_2.jpeg",
    status: "Legal Documentation Stage",
    invoiceNo: "INV-KOL-2026-102",
    admissionDate: "2026-05-20",
    doctorInCharge: "Dr. Sourav Banerjee (Neonatologist)",
    invoiceItems: [
      { description: "Neonatal Oxygen Therapy & Monitoring", cost: 20000 },
      { description: "Nutritional Support & Formula", cost: 12000 },
      { description: "Child Welfare Legal Documentation", cost: 13000 }
    ]
  },
  {
    id: "NK-103",
    name: "Reyansh Das",
    gender: "boy",
    age: "4 Years",
    category: "Emergency Care",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "Acute Orthopedic Rehabilitation",
    estimatedCost: 62000,
    raisedAmount: 41000,
    image: "assets/child/child_3.jpeg",
    status: "Under Recovery",
    invoiceNo: "INV-BRP-2026-103",
    admissionDate: "2026-07-01",
    doctorInCharge: "Dr. Hiren Medhi (Pediatric Orthopedic)",
    invoiceItems: [
      { description: "Femur Fracture Fixation & Plaster", cost: 28000 },
      { description: "Physical Therapy & Physiotherapy (15 sessions)", cost: 18000 },
      { description: "Pain Management & Antibiotics", cost: 16000 }
    ]
  },
  {
    id: "NK-104",
    name: "Pari Saikia",
    gender: "girl",
    age: "3 Years",
    category: "Medical Bill Support",
    location: "guwahati",
    hospital: "Apollo Hospital, Guwahati",
    condition: "Congenital Hydrocephalus Treatment",
    estimatedCost: 95000,
    raisedAmount: 60000,
    image: "assets/child/child_4.jpeg",
    status: "Surgery Scheduled",
    invoiceNo: "INV-GWT-2026-104",
    admissionDate: "2026-06-25",
    doctorInCharge: "Dr. Bishnu Prasad Boro (Neurosurgeon)",
    invoiceItems: [
      { description: "VP Shunt Surgery Procedure", cost: 48000 },
      { description: "Pre-Op MRI & Diagnostic Scans", cost: 22000 },
      { description: "ICU Stay & Post-Op Monitoring", cost: 25000 }
    ]
  },
  {
    id: "NK-105",
    name: "Kabir Mukhopadhyay",
    gender: "boy",
    age: "10 Months",
    category: "Adoption & Care",
    location: "kolkata",
    hospital: "Apollo Gleneagles, Kolkata",
    condition: "Infant Malnutrition & General Pediatrics",
    estimatedCost: 35000,
    raisedAmount: 32000,
    image: "assets/child/child_5.jpeg",
    status: "Ready for Match",
    invoiceNo: "INV-KOL-2026-105",
    admissionDate: "2026-06-05",
    doctorInCharge: "Dr. Priyamvada Sen (Pediatric Nutritionist)",
    invoiceItems: [
      { description: "Clinical Malnutrition Protocol", cost: 15000 },
      { description: "Immunization & Vaccine Series", cost: 10000 },
      { description: "Pediatric Assessment & Foster Care", cost: 10000 }
    ]
  },
  {
    id: "NK-106",
    name: "Diya Ahmed",
    gender: "girl",
    age: "5 Years",
    category: "Emergency Care",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "Severe Pneumonia & Oxygen Support",
    estimatedCost: 40000,
    raisedAmount: 29000,
    image: "assets/child/child_6.jpeg",
    status: "In ICU Unit",
    invoiceNo: "INV-BRP-2026-106",
    admissionDate: "2026-07-10",
    doctorInCharge: "Dr. Rituraj Choudhury (Pulmonologist)",
    invoiceItems: [
      { description: "High-Flow Oxygen Therapy", cost: 18000 },
      { description: "IV Antibiotics & Nebulization", cost: 12000 },
      { description: "Pediatric Care Monitoring", cost: 10000 }
    ]
  },

  {
    id: "NK-109",
    name: "Ishaan Kalita",
    gender: "boy",
    age: "6 Years",
    category: "Medical Bill Support",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "Pediatric Nephrotic Syndrome",
    estimatedCost: 70000,
    raisedAmount: 42000,
    image: "assets/child/child_9.jpeg",
    status: "Ongoing Dialysis & Steroid Therapy",
    invoiceNo: "INV-BRP-2026-109",
    admissionDate: "2026-06-01",
    doctorInCharge: "Dr. Nabajit Pathak (Pediatric Nephrologist)",
    invoiceItems: [
      { description: "Pediatric Renal Dialysis Sessions", cost: 35000 },
      { description: "Immunosuppressive Therapy", cost: 20000 },
      { description: "Laboratory Blood Panels & Urinalysis", cost: 15000 }
    ]
  },
  {
    id: "NK-110",
    name: "Meera Nath",
    gender: "girl",
    age: "8 Months",
    category: "Emergency Care",
    location: "guwahati",
    hospital: "Apollo Hospital, Guwahati",
    condition: "Neonatal Jaundice & Bilirubin Phototherapy",
    estimatedCost: 28000,
    raisedAmount: 22000,
    image: "assets/child/child_10.jpeg",
    status: "Stable / Responding",
    invoiceNo: "INV-GWT-2026-110",
    admissionDate: "2026-07-15",
    doctorInCharge: "Dr. Priyanka Bezbaruah (Pediatrician)",
    invoiceItems: [
      { description: "NICU Phototherapy Unit (5 days)", cost: 16000 },
      { description: "Bilirubin Monitoring Labs", cost: 6000 },
      { description: "Infant Care & Supplies", cost: 6000 }
    ]
  },
  {
    id: "NK-111",
    name: "Vihaan Ganguly",
    gender: "boy",
    age: "3.5 Years",
    category: "Medical Bill Support",
    location: "kolkata",
    hospital: "Apollo Gleneagles, Kolkata",
    condition: "Pediatric Cochlear Implant Surgery",
    estimatedCost: 120000,
    raisedAmount: 85000,
    image: "assets/child/child_11.jpeg",
    status: "Pre-Surgical Clearance",
    invoiceNo: "INV-KOL-2026-111",
    admissionDate: "2026-06-19",
    doctorInCharge: "Dr. Amitabh Sarkar (ENT Specialist)",
    invoiceItems: [
      { description: "Bilateral Audiometry & Scans", cost: 30000 },
      { description: "Cochlear Implant Surgical Suite", cost: 70000 },
      { description: "Post-Op Rehabilitation & Therapy", cost: 20000 }
    ]
  },
  {
    id: "NK-112",
    name: "Avani Talukdar",
    gender: "girl",
    age: "4.5 Years",
    category: "Adoption & Care",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "General Health Assessment & Care Shield",
    estimatedCost: 32000,
    raisedAmount: 28000,
    image: "assets/child/child_12.jpeg",
    status: "Foster Care Stage",
    invoiceNo: "INV-BRP-2026-112",
    admissionDate: "2026-05-11",
    doctorInCharge: "Dr. Hiren Medhi (Pediatric Orthopedic)",
    invoiceItems: [
      { description: "Nutritional & Growth Screening", cost: 14000 },
      { description: "Immunization & Health Certificate", cost: 18000 }
    ]
  },
  {
    id: "NK-113",
    name: "Rohan Deka",
    gender: "boy",
    age: "1.5 Years",
    category: "Emergency Care",
    location: "guwahati",
    hospital: "Apollo Hospital, Guwahati",
    condition: "Accidental Ingestion Trauma Recovery",
    estimatedCost: 50000,
    raisedAmount: 43000,
    image: "assets/child/child_13.jpeg",
    status: "Discharge Pending",
    invoiceNo: "INV-GWT-2026-113",
    admissionDate: "2026-07-02",
    doctorInCharge: "Dr. Anirban Dutta (Pediatric Cardiologist)",
    invoiceItems: [
      { description: "Emergency Endoscopy Procedure", cost: 25000 },
      { description: "ICU Care & Diagnostics", cost: 15000 },
      { description: "Post-Trauma Medication", cost: 10000 }
    ]
  },
  {
    id: "NK-114",
    name: "Sneha Ghosh",
    gender: "girl",
    age: "2.8 Years",
    category: "Medical Bill Support",
    location: "kolkata",
    hospital: "Apollo Gleneagles, Kolkata",
    condition: "Pediatric Epilepsy & Neurological Support",
    estimatedCost: 78000,
    raisedAmount: 51000,
    image: "assets/child/child_14.jpeg",
    status: "Medication Adjustment",
    invoiceNo: "INV-KOL-2026-114",
    admissionDate: "2026-06-30",
    doctorInCharge: "Dr. Priyamvada Sen (Pediatric Neurologist)",
    invoiceItems: [
      { description: "24-Hour Video EEG & Brain MRI", cost: 32000 },
      { description: "Anti-Epileptic Drug Regimen", cost: 26000 },
      { description: "Specialized Pediatric Neurology Visits", cost: 20000 }
    ]
  },
  {
    id: "NK-115",
    name: "Arnav Sarma",
    gender: "boy",
    age: "5 Years",
    category: "Adoption & Care",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "Dental & Speech Rehabilitation",
    estimatedCost: 29000,
    raisedAmount: 24000,
    image: "assets/child/child_15.jpeg",
    status: "Therapy in Progress",
    invoiceNo: "INV-BRP-2026-115",
    admissionDate: "2026-06-15",
    doctorInCharge: "Dr. Rituraj Choudhury (Pediatric Specialist)",
    invoiceItems: [
      { description: "Pediatric Dental Reconstruction", cost: 15000 },
      { description: "Speech & Language Assessment", cost: 14000 }
    ]
  },
  {
    id: "NK-116",
    name: "Aditi Mahanta",
    gender: "girl",
    age: "1 Year",
    category: "Emergency Care",
    location: "guwahati",
    hospital: "Apollo Hospital, Guwahati",
    condition: "Severe Gastroenteritis & Dehydration",
    estimatedCost: 26000,
    raisedAmount: 26000,
    image: "assets/child/child_16.jpeg",
    status: "Fully Recovered",
    invoiceNo: "INV-GWT-2026-116",
    admissionDate: "2026-07-08",
    doctorInCharge: "Dr. Priyanka Bezbaruah (Pediatrician)",
    invoiceItems: [
      { description: "Pediatric Electrolyte Infusion", cost: 12000 },
      { description: "High-Care Nursery Monitoring", cost: 14000 }
    ]
  },
  {
    id: "NK-117",
    name: "Vivaan Chatterjee",
    gender: "boy",
    age: "3 Years",
    category: "Medical Bill Support",
    location: "kolkata",
    hospital: "Apollo Gleneagles, Kolkata",
    condition: "Type 1 Diabetes Juvenile Management",
    estimatedCost: 48000,
    raisedAmount: 31000,
    image: "assets/child/child_17.jpeg",
    status: "Insulin Pump Installation",
    invoiceNo: "INV-KOL-2026-117",
    admissionDate: "2026-06-22",
    doctorInCharge: "Dr. Sourav Banerjee (Endocrinology)",
    invoiceItems: [
      { description: "Continuous Glucose Monitor & Pump", cost: 28000 },
      { description: "Endocrine Screening & Dietetics", cost: 20000 }
    ]
  },
  {
    id: "NK-118",
    name: "Prisha Das",
    gender: "girl",
    age: "6 Months",
    category: "Adoption & Care",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "Infant Care Hold & Medical Checkup",
    estimatedCost: 25000,
    raisedAmount: 21000,
    image: "assets/child/child_18.jpeg",
    status: "Verification Phase",
    invoiceNo: "INV-BRP-2026-118",
    admissionDate: "2026-07-12",
    doctorInCharge: "Dr. Nabajit Pathak (Pediatrician)",
    invoiceItems: [
      { description: "Infant Health Screening & Blood Panel", cost: 13000 },
      { description: "Foster Home Setup & Hygiene Kit", cost: 12000 }
    ]
  },
  {
    id: "NK-119",
    name: "Dhruv Gogoi",
    gender: "boy",
    age: "4 Years",
    category: "Emergency Care",
    location: "guwahati",
    hospital: "Apollo Hospital, Guwahati",
    condition: "Pediatric Asthma Exacerbation",
    estimatedCost: 38000,
    raisedAmount: 34000,
    image: "assets/child/child_19.jpeg",
    status: "Stabilized",
    invoiceNo: "INV-GWT-2026-119",
    admissionDate: "2026-07-04",
    doctorInCharge: "Dr. Anirban Dutta (Pediatrician)",
    invoiceItems: [
      { description: "Oxygen Chamber & Nebulization", cost: 20000 },
      { description: "Allergy Diagnostics & Meds", cost: 18000 }
    ]
  },
  {
    id: "NK-120",
    name: "Kavya Sengupta",
    gender: "girl",
    age: "2.2 Years",
    category: "Medical Bill Support",
    location: "kolkata",
    hospital: "Apollo Gleneagles, Kolkata",
    condition: "Congenital Clubfoot Correction Surgery",
    estimatedCost: 65000,
    raisedAmount: 59000,
    image: "assets/child/child_20.jpeg",
    status: "Casting Phase",
    invoiceNo: "INV-KOL-2026-120",
    admissionDate: "2026-05-30",
    doctorInCharge: "Dr. Amitabh Sarkar (Orthopedics)",
    invoiceItems: [
      { description: "Ponseti Serial Casting & Tenotomy", cost: 40000 },
      { description: "Orthotic Braces & Footwear", cost: 25000 }
    ]
  },
  {
    id: "NK-121",
    name: "Tanish Baishya",
    gender: "boy",
    age: "1.9 Years",
    category: "Adoption & Care",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "Nutritional Rehabilitation & Legal Hold",
    estimatedCost: 30000,
    raisedAmount: 27000,
    image: "assets/child/child_21.jpeg",
    status: "Adoption Clearance Ready",
    invoiceNo: "INV-BRP-2026-121",
    admissionDate: "2026-06-08",
    doctorInCharge: "Dr. Hiren Medhi (Pediatrician)",
    invoiceItems: [
      { description: "Weight Gain & Growth Monitoring", cost: 16000 },
      { description: "Legal Adoption Documentation", cost: 14000 }
    ]
  },
  {
    id: "NK-122",
    name: "Riya Barman",
    gender: "girl",
    age: "3.8 Years",
    category: "Emergency Care",
    location: "guwahati",
    hospital: "Apollo Hospital, Guwahati",
    condition: "Pediatric Burn Trauma Care",
    estimatedCost: 80000,
    raisedAmount: 61000,
    image: "assets/child/child_22.jpeg",
    status: "Skin Grafting Recovery",
    invoiceNo: "INV-GWT-2026-122",
    admissionDate: "2026-06-18",
    doctorInCharge: "Dr. Maya Swargiary (Plastic Surgeon)",
    invoiceItems: [
      { description: "Burn Dressing & Debridement", cost: 45000 },
      { description: "Antimicrobial & Pain Infusions", cost: 20000 },
      { description: "Pediatric Plastic Surgery Followup", cost: 15000 }
    ]
  },
  {
    id: "NK-123",
    name: "Neil Chakraborty",
    gender: "boy",
    age: "2.7 Years",
    category: "Medical Bill Support",
    location: "kolkata",
    hospital: "Apollo Gleneagles, Kolkata",
    condition: "Pediatric Hernia Surgical Repair",
    estimatedCost: 52000,
    raisedAmount: 49000,
    image: "assets/child/child_23.jpeg",
    status: "Surgery Completed",
    invoiceNo: "INV-KOL-2026-123",
    admissionDate: "2026-07-05",
    doctorInCharge: "Dr. Sourav Banerjee (Pediatric Surgery)",
    invoiceItems: [
      { description: "Inguinal Herniotomy Surgery", cost: 32000 },
      { description: "Anesthesia & Daycare ICU", cost: 20000 }
    ]
  },
  {
    id: "NK-124",
    name: "Ishita Kalita",
    gender: "girl",
    age: "5.2 Years",
    category: "Adoption & Care",
    location: "barpeta",
    hospital: "FAAMCH, Barpeta",
    condition: "Pediatric Eye & Vision Correction",
    estimatedCost: 34000,
    raisedAmount: 31000,
    image: "assets/child/child_24.jpeg",
    status: "Glasses Fitted / Healthy",
    invoiceNo: "INV-BRP-2026-124",
    admissionDate: "2026-06-28",
    doctorInCharge: "Dr. Rituraj Choudhury (Ophthalmology)",
    invoiceItems: [
      { description: "Strabismus Assessment & Lenses", cost: 18000 },
      { description: "Visual Rehabilitation", cost: 16000 }
    ]
  },
  {
    id: "NK-125",
    name: "Agastya Paul",
    gender: "boy",
    age: "1.1 Years",
    category: "Emergency Care",
    location: "guwahati",
    hospital: "Apollo Hospital, Guwahati",
    condition: "Acute Viral Fever & Thrombocytopenia",
    estimatedCost: 42000,
    raisedAmount: 39000,
    image: "assets/child/child_25.jpeg",
    status: "Platelets Restored",
    invoiceNo: "INV-GWT-2026-125",
    admissionDate: "2026-07-14",
    doctorInCharge: "Dr. Priyanka Bezbaruah (Pediatrician)",
    invoiceItems: [
      { description: "Platelet Transfusion & Blood Bank", cost: 22000 },
      { description: "Pediatric HDU Monitoring", cost: 20000 }
    ]
  }
];

const certifiedDoctors = [
  {
    id: "DOC-01",
    name: "Dr. Dhanraj K",
    title: "MBBS",
    degree: "MBBS, MD Internal Medicine",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "25 Years",
    image: "assets/doctors/dhanraj_k.jpg",
    specialty: "MBBS, MD Internal Medicine",
    rating: 4.9,
    reviews: 87,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-02",
    name: "Dr. Swarna Deepak K",
    title: "MBBS: MD (Internal Medicine) MRCP (UK)",
    degree: "MBBS: MD (Internal Medicine) MRCP (UK), EDIC (European Diploma in Critical Care), IDCCM, IFCCM (Critical Care), FID (Royal Liverpool Academy)",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "20 Years",
    image: "assets/doctors/swarna_deepak_k.jpg",
    specialty: "MBBS: MD (Internal Medicine) MRCP (UK), EDIC (European Diploma in Critical Care), IDCCM, IFCCM (Critical Care), FID (Royal Liverpool Academy)",
    rating: 5.0,
    reviews: 94,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-03",
    name: "Dr. Jatin Yegurla",
    title: "MD (PGI)",
    degree: "MD (PGI), DM (AIIMS Delhi), FAGIE (AIIMS Delhi), ESEGH (UK), Gold Medalist",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "13 Years",
    image: "assets/doctors/jatin_yegurla.jpg",
    specialty: "MD (PGI), DM (AIIMS Delhi), FAGIE (AIIMS Delhi), ESEGH (UK), Gold Medalist",
    rating: 4.8,
    reviews: 101,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-04",
    name: "Dr. Aswini Kumar Panigrahi",
    title: "MBBS",
    degree: "MBBS, MD (Int. Med.), DNB Nephro",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "23 Years",
    image: "assets/doctors/aswini_kumar_panigrahi.jpg",
    specialty: "MBBS, MD (Int. Med.), DNB Nephro",
    rating: 4.9,
    reviews: 108,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-05",
    name: "Dr. Bhanu Prakash Reddy Rachamallu",
    title: "MBBS ",
    degree: "MBBS , D'ORTHO, DNB (ORTHO), Mch (ORTHO),  Fellow in ARTHROPLASTY",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "24 Years",
    image: "assets/doctors/bhanu_prakash_reddy_rachamallu.png",
    specialty: "MBBS , D'ORTHO, DNB (ORTHO), Mch (ORTHO),  Fellow in ARTHROPLASTY",
    rating: 5.0,
    reviews: 115,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-06",
    name: "Dr. Puli Vanaja Reddy",
    title: "MBBS",
    degree: "MBBS, MPH (USA), DCP (UK)",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "15 Years",
    image: "assets/doctors/puli_vanaja_reddy.png",
    specialty: "MBBS, MPH (USA), DCP (UK)",
    rating: 4.8,
    reviews: 122,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-07",
    name: "Dr. Ankit Vijay Agarwal",
    title: "MBBS(Osmania)",
    degree: "MBBS(Osmania), DNB(Internal Medicine ), DM ( Osmania)  Consultant Gastroenterologist, Hepatologist and Advanced Therapeutic Endoscopist",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "16 Years",
    image: "assets/doctors/ankit_vijay_agarwal.jpg",
    specialty: "MBBS(Osmania), DNB(Internal Medicine ), DM ( Osmania)  Consultant Gastroenterologist, Hepatologist and Advanced Therapeutic Endoscopist",
    rating: 4.9,
    reviews: 129,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-08",
    name: "Dr. Krishna Sahithi J",
    title: "MBBS",
    degree: "MBBS, MD (Psychiatry), FIPS",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "11 Years",
    image: "assets/doctors/krishna_sahithi_j.jpg",
    specialty: "MBBS, MD (Psychiatry), FIPS",
    rating: 5.0,
    reviews: 136,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-09",
    name: "Dr. Rajib Paul",
    title: "MBBS",
    degree: "MBBS, MD,FICCM Consultant Physician & Intensivit  HOD",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "26 Years",
    image: "assets/doctors/rajib_paul.jpg",
    specialty: "MBBS, MD,FICCM Consultant Physician & Intensivit  HOD",
    rating: 4.8,
    reviews: 143,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  },
  {
    id: "DOC-10",
    name: "Dr. Sharmila Pendyala",
    title: "MBBS",
    degree: "MBBS, MD. (Paediatrics)",
    hospital: "Apollo Hospital, Jubilee Hills, Hyderabad",
    location: "hyderabad",
    experience: "23 Years",
    image: "assets/doctors/sharmila_pendyala.jpg",
    specialty: "MBBS, MD. (Paediatrics)",
    rating: 4.9,
    reviews: 150,
    availableDays: "Mon to Sat (10:00 AM - 4:00 PM)"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { regionalHubs, childProfiles, certifiedDoctors, CATEGORY_IMAGES };
}
