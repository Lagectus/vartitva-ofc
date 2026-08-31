export interface ImplantSystem {
  name: string;
  indication: string;
  material: string;
  features: string[];
  specs: string;
}

export interface CategoryData {
  slug: string;
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
    title: "Trauma Implants",
    subtitle: "Dependable Orthopaedic Trauma & Fracture Care Solutions",
    tagline: "Precision Fracture Management & Bone Healing",
    badge: "Orthopaedic Trauma Portfolio",
    image: "/images/orthopaedic_implants.png",
    description:
      "Trauma solutions are designed to support the treatment of fractures, bone injuries, and other orthopedic trauma conditions. They provide practical options for different procedures and help healthcare professionals manage injury-related cases with dependable products.",
    overviewParagraphs: [
      "Trauma solutions are designed to support the treatment of fractures, bone injuries, and other orthopedic trauma conditions. They provide practical options for different procedures and help healthcare professionals manage injury-related cases with dependable products.",
      "At Vartitva Health, our trauma portfolio provides healthcare professionals with locking plate systems, intramedullary nails, cannulated screws, and external fixation technologies engineered for anatomical congruence and rigid internal fixation.",
      "Manufactured from certified medical-grade Titanium Alloy (Ti-6Al-4V ELI) and Stainless Steel (316L), every trauma solution adheres to rigorous ISO 13485 standards, CDSCO, and international compliance benchmarks.",
      "We support hospitals and surgical centers across Delhi, Gurugram, Sonipat, Panipat, Faridabad, and Pan-India with emergency OR delivery and complete surgical instrumentation.",
    ],
    keySpecs: [
      { label: "Material Grade", value: "Ti-6Al-4V ELI / 316L Stainless Steel" },
      { label: "Quality Compliance", value: "ISO 13485 & CDSCO Certified" },
      { label: "Sterilization Standard", value: "Pre-sterilized & Non-sterile Tray Options" },
      { label: "Delivery Support", value: "Emergency OR Supply in Delhi NCR & Pan-India" },
    ],
    implantSystems: [
      {
        name: "Anatomic Locking Compression Plate Systems",
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
        name: "Intramedullary Interlocking Nailing Systems",
        indication: "Femoral, Tibial & Humeral Shaft Fractures",
        material: "Titanium Alloy (Ti-6Al-4V)",
        features: [
          "Anatomical bend radius matching natural canal curvature",
          "Multi-planar locking options for enhanced rotational stability",
          "Reamed and unreamed surgical technique compatibility",
        ],
        specs: "Diameter: 8mm to 13mm | Lengths: 240mm to 440mm",
      },
      {
        name: "Cannulated & Solid Cortical/Cancellous Screws",
        indication: "Femoral Neck, Scaphoid & Small Bone Fixation",
        material: "Ti-6Al-4V / 316L SS",
        features: [
          "Self-drilling and self-tapping thread profiles",
          "Reverse-cutting flutes facilitating clean insertion and removal",
          "Guide wire guided precision insertion for intraoperative accuracy",
        ],
        specs: "2.7mm, 3.5mm, 4.0mm, 4.5mm & 6.5mm Cannulated Screws",
      },
      {
        name: "External Fixation & Pin Systems",
        indication: "Open Fractures, Polytrauma & Damage Control Orthopaedics",
        material: "Carbon Fiber & Titanium Rods",
        features: [
          "Lightweight modular clamps for rapid emergency assembly",
          "Self-drilling Schanz pins with hydroxyapatite coating options",
          "Radiolucent carbon fiber connecting rods for clear X-ray imaging",
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
        desc: "Every trauma implant carries laser-etched lot numbers for complete regulatory compliance and hospital records.",
      },
      {
        title: "Sterile & Tray Logistics",
        desc: "Supplied in individual sterile peel-packs or organized surgical container trays for hospital OR efficiency.",
      },
    ],
  },

  "joint-implants": {
    slug: "joint-implants",
    title: "Joints Implants",
    subtitle: "Joint Restoration Solutions for Hip, Knee & Major Articulations",
    tagline: "Mobility Restoration & Joint Longevity",
    badge: "Joints Implant Portfolio",
    image: "/images/joint_replacement_implants.png",
    description:
      "Our Joint solutions focus on supporting the treatment of joint-related conditions and restoring comfortable movement. They are developed for procedures involving commonly treated joints while maintaining focus on quality and dependable clinical use.",
    overviewParagraphs: [
      "Our Joint solutions focus on supporting the treatment of joint-related conditions and restoring comfortable movement. They are developed for procedures involving commonly treated joints while maintaining focus on quality and dependable clinical use.",
      "Vartitva Health supplies high-performance joint solutions designed to help orthopedic surgeons restore joint kinematics, relieve pain, and enhance mobility in patients suffering from severe osteoarthritis, rheumatoid degeneration, and trauma-induced joint disorders.",
      "Our portfolio encompasses primary and revision total knee systems, modular hip stems, ceramic/metallic articulating heads, and highly cross-linked polyethylene (HXLPE) liners engineered for ultra-low wear rates and long-term joint stability.",
      "Backed by complete surgical trial kits and prompt delivery logistics, we ensure seamless operational readiness for hospitals and orthopedic institutions.",
    ],
    keySpecs: [
      { label: "Femoral Component", value: "CoCr Alloy / Premium Surface Options" },
      { label: "Tibial / Acetabular Liner", value: "Highly Cross-linked Polyethylene (HXLPE)" },
      { label: "Fixation Options", value: "Cementless Porous Coated & Cemented Stems" },
      { label: "Surgeons Support", value: "Complete Precision Instrument & Trial Kits" },
    ],
    implantSystems: [
      {
        name: "Primary Total Knee Replacement (TKR) Systems",
        indication: "End-Stage Knee Osteoarthritis & Rheumatoid Joint Degradation",
        material: "CoCr Alloy Femoral Component + HXLPE Tibial Insert",
        features: [
          "Anatomical femoral geometry for natural patellar tracking",
          "Posterior Stabilized (PS) and Cruciate Retaining (CR) configurations",
          "Proportional sizing options ensuring accurate soft tissue and ligament balancing",
        ],
        specs: "Sizes 1 to 6 | PS & CR Insert Thicknesses 9mm-17mm",
      },
      {
        name: "Total Hip Arthroplasty (THA) Systems",
        indication: "Hip Osteoarthritis, Avascular Necrosis & Femoral Neck Fractures",
        material: "Ti-6Al-4V Stem + Biolox Ceramic / CoCr Head + HXLPE Cup",
        features: [
          "Triple-tapered cementless femoral stem promoting rapid osseointegration",
          "Porous plasma-sprayed titanium acetabular shell coating",
          "Ceramic and CoCr head options for ultra-low friction wear",
        ],
        specs: "Stem Sizes 0 to 10 | Head Diameters: 28mm, 32mm, 36mm",
      },
      {
        name: "Revision Knee & Hip Reconstruction Systems",
        indication: "Joint Revision, Severe Bone Loss & Structural Defect Reconstructions",
        material: "Ti-6Al-4V Stems & Modular Augments",
        features: [
          "Modular tibial and femoral stem extensions for axial load stabilization",
          "Step and wedge titanium augments addressing severe bone loss defects",
          "Constrained and hinged options for complex ligamentous instability",
        ],
        specs: "Modular Stem Lengths: 75mm to 150mm | Offset Options",
      },
    ],
    qualityHighlights: [
      {
        title: "Ultra-Low Wear Tribology",
        desc: "Advanced HXLPE articulating surfaces minimize osteolysis risk and support long-term implant longevity.",
      },
      {
        title: "Porous Biological Fixation",
        desc: "Plasma-sprayed porous coatings optimize initial press-fit stability and natural bone ingrowth.",
      },
      {
        title: "Complete Surgical Support",
        desc: "Delivered with precision trial components and ergonomic instrument containers for rapid surgical workflow.",
      },
    ],
  },

  "spine-implants": {
    slug: "spine-implants",
    title: "Spine Implants",
    subtitle: "Thoracolumbar, Cervical & Interbody Stabilization Technologies",
    tagline: "Vertebral Stability, Spinal Alignment & Consistent Performance",
    badge: "Spine Solutions Portfolio",
    image: "/images/spine_implants.png",
    description:
      "Spine solutions are intended for the treatment of various spinal conditions and injuries. They support different spinal procedures with products designed for dependable use and consistent performance.",
    overviewParagraphs: [
      "Spine solutions are intended for the treatment of various spinal conditions and injuries. They support different spinal procedures with products designed for dependable use and consistent performance.",
      "Vartitva Health offers spinal stabilization systems designed to assist spine surgeons in treating thoracolumbar fractures, degenerative disc diseases, spondylolisthesis, spinal deformities, and cervical pathologies.",
      "Our spine solutions encompass low-profile polyaxial pedicle screw systems, PEEK and Titanium interbody fusion cages, anterior cervical plate constructs, and minimally invasive (MIS) percutaneous instrumentation.",
      "Every spinal system is manufactured to tight dimensional tolerances with color-coded surgical kits and ergonomic instrumentation to support intraoperative precision.",
    ],
    keySpecs: [
      { label: "Pedicle Screw Material", value: "Titanium Alloy (Ti-6Al-4V ELI)" },
      { label: "Cage Material Options", value: "Medical Grade PEEK / 3D Titanium" },
      { label: "Technique Compatibility", value: "Open & MIS Percutaneous Approaches" },
      { label: "Quality Standards", value: "ISO 13485 & CDSCO Certified" },
    ],
    implantSystems: [
      {
        name: "Thoracolumbar Polyaxial Pedicle Screw System",
        indication: "Spondylolisthesis, Vertebral Fractures & Spinal Fusion",
        material: "Ti-6Al-4V ELI",
        features: [
          "Dual-lead thread design for rapid insertion and exceptional pullout strength",
          "60-degree polyaxial screw head angulation facilitating seamless rod insertion",
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
          "Pyramidal anti-migration teeth preventing postoperative cage displacement",
        ],
        specs: "PLIF / TLIF Cages: Heights 8mm to 14mm | Cervical: 5mm to 10mm",
      },
      {
        name: "Anterior Cervical Plate & Screw Systems",
        indication: "Cervical Trauma, Herniated Cervical Discs & Degenerative Instability",
        material: "Ti-6Al-4V Titanium Alloy",
        features: [
          "Ultra-thin 2.0mm plate profile minimizing postoperative dysphagia",
          "Integrated locking mechanism providing visual and tactile verification",
          "Variable and fixed angle locking screws for dynamic load sharing",
        ],
        specs: "1 to 4 Level Plates | Screw Diameters: 3.5mm & 4.0mm",
      },
    ],
    qualityHighlights: [
      {
        title: "High Pullout Resistance",
        desc: "Optimized thread geometry delivers maximum pedicle fixation strength even in compromised bone quality.",
      },
      {
        title: "Radiolucent Imaging",
        desc: "PEEK cage materials with integrated tantalum markers provide clear intraoperative and postoperative imaging.",
      },
      {
        title: "MIS Surgical Compatibility",
        desc: "Percutaneous extension towers enable minimally invasive surgery with reduced tissue disruption.",
      },
    ],
  },

  "arthroscopy-implants": {
    slug: "arthroscopy-implants",
    title: "Arthroscopy Implants",
    subtitle: "Minimally Invasive Sports Medicine & Joint Preservation Solutions",
    tagline: "Sports Medicine & Minimally Invasive Joint Repair",
    badge: "Arthroscopy Portfolio",
    image: "/images/arthroscopy_implants.png",
    description:
      "Advanced arthroscopy and sports medicine implant solutions for minimally invasive joint reconstruction, ligament repair, and soft-tissue fixation across knee, shoulder, and extremity procedures.",
    overviewParagraphs: [
      "Vartitva Health delivers advanced arthroscopy and sports medicine solutions tailored for orthopedic surgeons performing minimally invasive joint preservation and ligament reconstructions.",
      "Our portfolio includes suture anchors, interference screws, adjustable cortical fixation loops, and meniscal repair systems engineered for high pullout strength and anatomical soft-tissue fixation.",
      "We provide hospitals across Delhi NCR and Pan-India with surgical instrumentation and prompt case-by-case delivery.",
    ],
    keySpecs: [
      { label: "Suture Anchor Materials", value: "PEEK / Titanium / Biocomposite" },
      { label: "Interference Screws", value: "Bioabsorbable & Titanium Options" },
      { label: "Application Areas", value: "ACL/PCL, Rotator Cuff, Labrum & Meniscus" },
      { label: "Quality Compliance", value: "ISO 13485 & CDSCO Certified" },
    ],
    implantSystems: [
      {
        name: "Suture Anchor Systems (Knotless & Threaded)",
        indication: "Rotator Cuff Repair, Bankart & SLAP Lesion Fixation",
        material: "PEEK / Titanium with UHMWPE Sutures",
        features: [
          "High pullout strength with low insertion torque",
          "Pre-loaded with ultra-high molecular weight polyethylene sutures",
          "Knotless tensioning options for streamlined arthroscopic workflow",
        ],
        specs: "Diameters: 2.8mm, 3.5mm, 4.5mm, 5.5mm",
      },
      {
        name: "Interference Screws & Cortical Button Loops",
        indication: "ACL & PCL Reconstruction Soft Tissue / BTB Graft Fixation",
        material: "PEEK / PLLA-HA Biocomposite / Titanium",
        features: [
          "Round-thread design preserving graft integrity during insertion",
          "Adjustable loop buttons allowing precise graft tensioning and retensioning",
          "Fully cannulated design compatible with standard guide wires",
        ],
        specs: "Lengths: 20mm to 35mm | Diameters: 7mm to 11mm",
      },
    ],
    qualityHighlights: [
      {
        title: "High Soft-Tissue Holding Strength",
        desc: "Engineered suture and anchor designs ensure secure fixation throughout early rehabilitation.",
      },
      {
        title: "Biocompatible Materials",
        desc: "Tissue-friendly PEEK and biocomposite options minimize inflammatory response.",
      },
      {
        title: "Emergency OR Dispatch",
        desc: "Ready inventory and instrument support for sports medicine and arthroscopy cases.",
      },
    ],
  },
};

/**
 * Slug alias resolver to normalize various slug permutations:
 * e.g. 'trauma' -> 'trauma-implants'
 *      'joints' -> 'joint-implants'
 *      'joints-implant' -> 'joint-implants'
 *      'spine' -> 'spine-implants'
 */
export function getCategoryBySlug(slug: string): CategoryData | undefined {
  const normalized = slug.toLowerCase().trim();

  const aliasMap: Record<string, string> = {
    // Trauma aliases
    "trauma": "trauma-implants",
    "trauma-implant": "trauma-implants",
    "trauma-implants": "trauma-implants",
    "trauma-solutions": "trauma-implants",
    "orthopaedic-implants": "trauma-implants",
    "orthopedic-implants": "trauma-implants",

    // Joints aliases
    "joints": "joint-implants",
    "joint": "joint-implants",
    "joints-implant": "joint-implants",
    "joints-implants": "joint-implants",
    "joint-implant": "joint-implants",
    "joint-implants": "joint-implants",
    "joint-replacement": "joint-implants",
    "joint-replacement-implants": "joint-implants",

    // Spine aliases
    "spine": "spine-implants",
    "spine-implant": "spine-implants",
    "spine-implants": "spine-implants",
    "spine-solutions": "spine-implants",

    // Arthroscopy aliases
    "arthroscopy": "arthroscopy-implants",
    "arthroscopy-implant": "arthroscopy-implants",
    "arthroscopy-implants": "arthroscopy-implants",
    "sports-medicine": "arthroscopy-implants",
  };

  const key = aliasMap[normalized] || normalized;
  return CATEGORIES_DATA[key];
}
