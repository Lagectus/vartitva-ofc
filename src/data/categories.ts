export interface ImplantSystem {
  name: string;
  indication: string;
  material: string;
  features: string[];
  specs: string;
}

export interface CategoryData {
  slug: string;
  slugAlt?: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  image: string;
  description: string;
  overviewParagraphs: string[];
  keySpecs: { label: string; value: string }[];
  implantSystems: ImplantSystem[];
  qualityHighlights: { title: string; desc: string }[];
}

export const CATEGORIES_DATA: Record<string, CategoryData> = {
  "trauma-implants": {
    slug: "trauma-implants",
    title: "Orthopaedic & Trauma Implants",
    subtitle: "Advanced Fixation & Trauma Care Systems for Complex Fractures",
    tagline: "Trauma Care & Reconstructive Precision",
    badge: "Orthopaedic & Trauma Portfolio",
    image: "/images/orthopaedic_implants.png",
    description:
      "Comprehensive range of high-precision orthopaedic trauma implants engineered for anatomical congruence, rigid internal fixation, and accelerated bone healing across trauma care procedures.",
    overviewParagraphs: [
      "At Vartitva Health, our Orthopaedic & Trauma Implant portfolio is designed to assist trauma surgeons in managing complex fractures, non-unions, and reconstructive bone procedures with unwavering precision.",
      "Manufactured from medical-grade Titanium Alloy (Ti-6Al-4V ELI) and Stainless Steel (316L), our locking plate systems, intramedullary nails, and cannulated screws adhere to stringent ISO 13485 quality standards and CE/CDSCO regulatory guidelines.",
      "We provide healthcare institutions across Delhi, Gurugram, Sonipat, and Pan-India with complete surgical instrument sets, rapid delivery for emergency procedures, and dedicated technical support.",
    ],
    keySpecs: [
      { label: "Material Grade", value: "Ti-6Al-4V ELI / 316L Stainless Steel" },
      { label: "Quality Compliance", value: "ISO 13485 & CE/CDSCO Certified" },
      { label: "Sterilization Standard", value: "Pre-sterilized & Non-sterile Tray Options" },
      { label: "Delivery Support", value: "Emergency OR Supply in Delhi NCR & Pan-India" },
    ],
    implantSystems: [
      {
        name: "Anatomic Locking Plate Systems",
        indication: "Complex Periarticular & Diaphyseal Fractures",
        material: "Titanium Alloy (Ti-6Al-4V)",
        features: [
          "Low-profile contoured design minimizing soft tissue irritation",
          "Combi-holes allowing both locking and angular-stable compression",
          "Tapered plate ends for minimally invasive insertion (MIPO)",
        ],
        specs: "3.5mm / 4.5mm / 5.0mm System Options",
      },
      {
        name: "Intramedullary Nailing Systems",
        indication: "Femoral, Tibial & Humeral Shaft Fractures",
        material: "Titanium Alloy",
        features: [
          "Anatomical bend radius matching natural canal curvature",
          "Multi-planar locking options for enhanced rotational stability",
          "Reamed and unreamed surgical technique compatibility",
        ],
        specs: "Diameter: 8mm to 13mm | Lengths: 240mm to 440mm",
      },
      {
        name: "Cannulated & Solid Screw Systems",
        indication: "Femoral Neck, Scaphoid & Small Bone Fixation",
        material: "Ti-6Al-4V / 316L SS",
        features: [
          "Self-drilling and self-tapping thread profiles",
          "Reverse-cutting flutes facilitating easy removal if required",
          "Guide wire guided precision insertion for intraoperative accuracy",
        ],
        specs: "2.7mm, 3.5mm, 4.0mm, 4.5mm & 6.5mm Cannulated Screws",
      },
      {
        name: "External Fixation & Pin Systems",
        indication: "Open Fractures, Damage Control & Polytrauma",
        material: "Carbon Fiber & Titanium Rods",
        features: [
          "Lightweight modular clamps for rapid assembly",
          "Self-drilling Schanz pins with hydroxyapatite coating options",
          "Radiolucent carbon fiber connecting rods",
        ],
        specs: "Pin Diameters: 4.0mm to 5.0mm | Modular Clamps",
      },
    ],
    qualityHighlights: [
      {
        title: "Anatomical Congruence",
        desc: "Pre-contoured designs reduce intraoperative bending time and ensure optimal biomechanical load sharing.",
      },
      {
        title: "Full Batch Traceability",
        desc: "Every implant carries laser-etched lot numbers for complete regulatory compliance and patient safety logs.",
      },
      {
        title: "Sterile & Tray Logistics",
        desc: "Supplied in individual sterile peel-packs or organized surgical container trays for hospital OR efficiency.",
      },
    ],
  },

  "joint-implants": {
    slug: "joint-implants",
    title: "Joint Replacement Implants",
    slugAlt: "joint-replacement-implants",
    subtitle: "Primary & Revision Total Knee and Hip Replacement Solutions",
    tagline: "Mobility Restoration & Joint Longevity",
    badge: "Joint Replacement Portfolio",
    image: "/images/joint_replacement_implants.png",
    description:
      "State-of-the-art total knee and hip replacement systems crafted with advanced tribology, highly cross-linked polyethylene, and porous coating for optimal implant longevity and joint function.",
    overviewParagraphs: [
      "Vartitva Health supplies high-performance joint replacement implant systems designed to help joint replacement surgeons restore joint kinematics and mobility in patients suffering from severe osteoarthritis and joint trauma.",
      "Our portfolio includes primary and revision total knee systems, modular hip stems, ceramic and metallic heads, and highly cross-linked polyethylene (HXLPE) liners engineered for ultra-low wear rates and long-term survivorship.",
      "Supported by dedicated surgical instrument sets and trial implants, our joint distribution network ensures timely supply and sterile packaging for hospitals across Delhi, Gurugram, Sonipat, and all major medical centers.",
    ],
    keySpecs: [
      { label: "Femoral Component", value: "CoCr Alloy / Oxinium Surface Options" },
      { label: "Tibial / Acetabular Liner", value: "Highly Cross-linked Polyethylene (HXLPE)" },
      { label: "Fixation Options", value: "Celled Porous Coated Cementless & Cemented Stems" },
      { label: "Surgeons Support", value: "Complete Precision Instrument & Trial Kits" },
    ],
    implantSystems: [
      {
        name: "Primary Total Knee Replacement (TKR)",
        indication: "End-Stage Osteoarthritis & Rheumatoid Knee Joint Degradation",
        material: "CoCr Alloy Femoral Component + HXLPE Tibial Insert",
        features: [
          "Anatomical femoral geometry for natural patellar tracking",
          "Posterior Stabilized (PS) and Cruciate Retaining (CR) options",
          "Proportional sizing options ensuring accurate ligament balancing",
        ],
        specs: "Sizes 1 to 6 | PS & CR Insert Thicknesses 9mm-17mm",
      },
      {
        name: "Total Hip Arthroplasty (THA) System",
        indication: "Hip Osteoarthritis, Avascular Necrosis & Neck Fractures",
        material: "Ti-6Al-4V Stem + Biolox Ceramic / CoCr Head + HXLPE Cup",
        features: [
          "Triple-tapered cementless femoral stem promoting osseointegration",
          "Porous plasma-sprayed titanium acetabular shell coating",
          "Biolox Delta ceramic head options for near-zero wear rate",
        ],
        specs: "Stem Sizes 0 to 10 | Head Diameters: 28mm, 32mm, 36mm",
      },
      {
        name: "Revision Knee & Hip Implant Systems",
        indication: "Implant Revision, Severe Bone Loss & Structural Defect Reconstructions",
        material: "Ti-6Al-4V Stems & Modular Augments",
        features: [
          "Modular tibial and femoral stems for axial load stabilization",
          "Step and wedge titanium augments addressing bone loss defects",
          "Hinge knee options for complex ligamentous instability",
        ],
        specs: "Modular Stem Lengths: 75mm to 150mm | Offset Options",
      },
    ],
    qualityHighlights: [
      {
        title: "Ultra-Low Wear Tribology",
        desc: "Advanced HXLPE liners infused with Vitamin-E options to minimize osteolysis risk and extend joint life.",
      },
      {
        title: "Porous Titanium Coating",
        desc: "Plasma-sprayed porous coatings optimize initial press-fit stability and long-term biological fixation.",
      },
      {
        title: "Full OR Support",
        desc: "Delivered with precision trial components and ergonomic instrument containers for rapid surgical workflow.",
      },
    ],
  },

  "spine-implants": {
    slug: "spine-implants",
    title: "Spine Implants & Spinal Systems",
    subtitle: "Thoracolumbar, Cervical & Interbody Stabilization Technologies",
    tagline: "Vertebral Stability & Spinal Correction",
    badge: "Spine Systems Portfolio",
    image: "/images/spine_implants.png",
    description:
      "Comprehensive spinal fixation systems including pedicle screw constructs, cervical plates, PEEK interbody cages, and minimally invasive spinal deformity correction implants.",
    overviewParagraphs: [
      "Vartitva Health offers advanced spinal fixation systems designed to assist spine surgeons in stabilizing thoracolumbar fractures, degenerative disc disease, spinal deformities, and cervical pathologies.",
      "Our spine portfolio encompasses low-profile polyaxial pedicle screw systems, PEEK and Titanium interbody fusion cages, anterior cervical plate constructs, and minimally invasive (MIS) percutaneous instrumentation.",
      "Every spinal implant is manufactured with ultra-precise tolerances, featuring color-coded surgical kits and ergonomic screwdrivers to enhance intraoperative ease and surgical accuracy.",
    ],
    keySpecs: [
      { label: "Pedicle Screw Material", value: "Titanium Alloy (Ti-6Al-4V ELI)" },
      { label: "Cage Material Options", value: "PEEK (Radiolucent) / 3D Printed Titanium" },
      { label: "Technique Compatibility", value: "Open & MIS Percutaneous Surgical Approaches" },
      { label: "Quality Standards", value: "ISO 13485, CE & CDSCO Certified" },
    ],
    implantSystems: [
      {
        name: "Thoracolumbar Pedicle Screw System",
        indication: "Spondylolisthesis, Vertebral Fractures & Spinal Fusion",
        material: "Ti-6Al-4V ELI",
        features: [
          "Dual-lead thread design for rapid insertion and pullout strength",
          "60-degree polyaxial screw head angulation facilitating rod insertion",
          "Low-profile tulip head design minimizing soft tissue impaction",
        ],
        specs: "Screw Diameters: 4.5mm to 7.5mm | Lengths: 30mm to 55mm",
      },
      {
        name: "PEEK Interbody Fusion Cages (PLIF / TLIF / Cervical)",
        indication: "Degenerative Disc Disease & Spinal Interbody Fusion",
        material: "Medical Grade PEEK + Tantalum Radiopaque Markers",
        features: [
          "Anatomical lordotic angle restoring natural sagittal alignment",
          "Large central graft window accommodating maximum bone graft volume",
          "Pyramidal teeth surface design preventing cage migration",
        ],
        specs: "PLIF / TLIF Cages: Heights 8mm to 14mm | Cervical: 5mm to 10mm",
      },
      {
        name: "Anterior Cervical Plate & Screw System",
        indication: "Cervical Trauma, Herniated Cervical Discs & Degenerative Instability",
        material: "Ti-6Al-4V Titanium Alloy",
        features: [
          "Ultra-thin 2.0mm plate profile minimizing postoperative dysphagia",
          "Visual locking mechanism providing tactile verification of screw lock",
          "Variable and fixed angle locking screws for dynamic load sharing",
        ],
        specs: "1 to 4 Level Plates | Screw Diameters: 3.5mm & 4.0mm",
      },
    ],
    qualityHighlights: [
      {
        title: "High Pullout Resistance",
        desc: "Optimized thread geometry delivers maximum pedicle fixation strength even in osteoporotic bone conditions.",
      },
      {
        title: "Radiolucent Imaging",
        desc: "PEEK cage materials with integrated tantalum markers provide clear intraoperative and postoperative X-ray evaluation.",
      },
      {
        title: "MIS Capability",
        desc: "Percutaneous extension towers enable minimally invasive surgery with reduced muscle dissection.",
      },
    ],
  },

  "neurology-implants": {
    slug: "neurology-implants",
    title: "Neurology & Neurosurgical Implants",
    subtitle: "Cranial Fixation, Dural Repair & Neurosurgical Support Technologies",
    tagline: "Neurosurgical Precision & Cranial Integrity",
    badge: "Neurology Portfolio",
    image: "/images/neurology_implants.png",
    description:
      "Specialized neurosurgical implants including low-profile cranial fixation plates, neuro-mesh, dural substitutes, and shunting systems engineered for neurotrauma and craniotomy procedures.",
    overviewParagraphs: [
      "Vartitva Health delivers specialized neurosurgical implant solutions tailored for neurosurgeons conducting craniotomy closure, cranial reconstruction, neuro-trauma management, and hydrocephalus shunt procedures.",
      "Our neuro portfolio features micro and mini cranial fixation plate-screw systems, malleable titanium neuro-mesh, synthetic dural matrix substitutes, and hydrocephalus shunt valves manufactured to strict biocompatibility standards.",
      "We partner with hospital neurosurgery departments in Delhi NCR and across India, providing immediate availability for emergency trauma cases and precision surgical instrumentation.",
    ],
    keySpecs: [
      { label: "Fixation System", value: "1.5mm Micro & 2.0mm Mini Titanium Systems" },
      { label: "Cranial Mesh", value: "Malleable Titanium Mesh (0.4mm to 0.6mm thickness)" },
      { label: "Dural Matrix", value: "Biocompatible Synthetic & Collagen Dural Substitutes" },
      { label: "Compliance", value: "ISO 13485 & CE/CDSCO Certified" },
    ],
    implantSystems: [
      {
        name: "Micro & Mini Cranial Fixation System",
        indication: "Craniotomy Flap Reattachment & Craniofacial Fractures",
        material: "Pure Titanium (Grade 2/4)",
        features: [
          "Low-profile 0.5mm plate height preventing palpable skin contours",
          "Self-retaining screw head design for secure engagement on blade",
          "Color-coded anodized storage module for rapid size selection",
        ],
        specs: "1.5mm & 2.0mm Screws | Straight, T, Y, & Burr-Hole Plates",
      },
      {
        name: "3D Malleable Titanium Cranial Mesh",
        indication: "Complex Cranial Defect Reconstruction & Cranioplasty",
        material: "Pure Titanium Mesh",
        features: [
          "Easily hand-malleable to match complex 3D cranial vault contours",
          "Burr-hole spacing allowing fluid drainage and tissue integration",
          "Compatible with self-tapping 1.5mm micro cranial screws",
        ],
        specs: "Thicknesses: 0.4mm, 0.5mm, 0.6mm | Sizes: 100x100mm to 150x150mm",
      },
      {
        name: "CSF Hydrocephalus Shunt Systems",
        indication: "Hydrocephalus & Intraventricular Pressure Management",
        material: "Medical Grade Silicone + Radiolucent Valve Housing",
        features: [
          "Low, medium, and high-pressure valve options with anti-siphon mechanism",
          "Impregnated barium stripe radiopaque silicone catheter tubing",
          "Self-sealing reservoir dome for intraoperative CSF sampling",
        ],
        specs: "Pediatric & Adult Sizes | Fixed & Programmable Valve Options",
      },
    ],
    qualityHighlights: [
      {
        title: "Palpability-Free Profile",
        desc: "Ultra-thin 0.5mm plate profile ensures smooth scalp contour without aesthetic or physical discomfort.",
      },
      {
        title: "Biocompatible Integration",
        desc: "Pure Titanium Grade 2 provides superior cell adhesion and biocompatibility during cranial healing.",
      },
      {
        title: "Emergency OR Dispatch",
        desc: "Immediate inventory availability for neuro-trauma emergencies across Delhi, Gurugram, Sonipat, & North India.",
      },
    ],
  },
};
