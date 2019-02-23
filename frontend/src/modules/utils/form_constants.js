/**
 * @desc All Global Form Constants.
 */

// export const DATE_TIME_FORMAT = "DD/MM/YYYY HH:mm A";
// export const TIME_FORMAT = "HH:mm A";
export const MAX_LENGTH_DATE = '10';
export const EMAIL_MAX_LENGTH = '50';

export const GENDER_OPTIONS = [
  {
    label: 'Male',
    value: 'male',
  }, {
    label: 'Female',
    value: 'female',
  },
];

export const YESNO_OPTIONS = [
  {
    label: 'Yes',
    value: 'Yes',
  }, {
    label: 'No',
    value: 'No',
  },
];

export const RISKSEVERITY_OPTIONS = [
  {
    label: 'High',
    value: 'High',
  }, {
    label: 'Medium',
    value: 'Medium',
  }, {
    label: 'Low',
    value: 'Low',
  },
];

export const OPERATIONALSTATUS_OPTIONS = [
  {
    label: 'Active',
    value: 'Active',
  }, {
    label: 'Inactive',
    value: 'Inactive',
  },{
    label: 'Lost',
    value: 'Lost',
  },
];

export const LANGUAGE_OPTIONS = [
  { label: ' Abkhaz ' },
  { label: ' Afar ' },
  { label: ' Afrikaans ' },
  { label: ' Akan ' },
  { label: ' Albanian ' },
  { label: ' Amharic ' },
  { label: ' Arabic ' },
  { label: ' Aragonese ' },
  { label: ' Armenian ' },
  { label: ' Assamese ' },
  { label: ' Avaric ' },
  { label: ' Avestan ' },
  { label: ' Aymara ' },
  { label: ' Azerbaijani ' },
  { label: ' Bambara ' },
  { label: ' Bashkir ' },
  { label: ' Basque ' },
  { label: ' Belarusian ' },
  { label: ' Bengali ' },
  { label: ' Bihari ' },
  { label: ' Bislama ' },
  { label: ' Bosnian ' },
  { label: ' Breton ' },
  { label: ' Bulgarian ' },
  { label: ' Burmese ' },
  { label: ' Catalan; Valencian ' },
  { label: ' Chamorro ' },
  { label: ' Chechen ' },
  { label: ' Chichewa; Chewa; Nyanja ' },
  { label: ' Chinese ' },
  { label: ' Chuvash ' },
  { label: ' Cornish ' },
  { label: ' Corsican ' },
  { label: ' Cree ' },
  { label: ' Croatian ' },
  { label: ' Czech ' },
  { label: ' Danish ' },
  { label: ' Divehi; Dhivehi; Maldivian; ' },
  { label: ' Dutch ' },
  { label: ' English ' },
  { label: ' Esperanto ' },
  { label: ' Estonian ' },
  { label: ' Ewe ' },
  { label: ' Faroese ' },
  { label: ' Fijian ' },
  { label: ' Finnish ' },
  { label: ' French ' },
  { label: ' Fula; Fulah; Pulaar; Pular ' },
  { label: ' Galician ' },
  { label: ' Georgian ' },
  { label: ' German ' },
  { label: ' Greek, Modern ' },
  { label: ' Guaraní ' },
  { label: ' Gujarati ' },
  { label: ' Haitian; Haitian Creole ' },
  { label: ' Hausa ' },
  { label: ' Hebrew (modern) ' },
  { label: ' Herero ' },
  { label: ' Hindi ' },
  { label: ' Hiri Motu ' },
  { label: ' Hungarian ' },
  { label: ' Interlingua ' },
  { label: ' Indonesian ' },
  { label: ' Interlingue ' },
  { label: ' Irish ' },
  { label: ' Igbo ' },
  { label: ' Inupiaq ' },
  { label: ' Ido ' },
  { label: ' Icelandic ' },
  { label: ' Italian ' },
  { label: ' Inuktitut ' },
  { label: ' Japanese ' },
  { label: ' Javanese ' },
  { label: ' Kalaallisut, Greenlandic ' },
  { label: ' Kannada ' },
  { label: ' Kanuri ' },
  { label: ' Kashmiri ' },
  { label: ' Kazakh ' },
  { label: ' Khmer ' },
  { label: ' Kikuyu, Gikuyu ' },
  { label: ' Kinyarwanda ' },
  { label: ' Kirghiz, Kyrgyz ' },
  { label: ' Komi ' },
  { label: ' Kongo ' },
  { label: ' Korean ' },
  { label: ' Kurdish ' },
  { label: ' Kwanyama, Kuanyama ' },
  { label: ' Latin ' },
  { label: ' Luxembourgish, Letzeburgesch ' },
  { label: ' Luganda ' },
  { label: ' Limburgish, Limburgan, Limburger ' },
  { label: ' Lingala ' },
  { label: ' Lao ' },
  { label: ' Lithuanian ' },
  { label: ' Luba-Katanga ' },
  { label: ' Latvian ' },
  { label: ' Manx ' },
  { label: ' Macedonian ' },
  { label: ' Malagasy ' },
  { label: ' Malay ' },
  { label: ' Malayalam ' },
  { label: ' Maltese ' },
  { label: ' Māori ' },
  { label: ' Marathi (Marāṭhī) ' },
  { label: ' Marshallese ' },
  { label: ' Mongolian ' },
  { label: ' Nauru ' },
  { label: ' Navajo, Navaho ' },
  { label: ' Norwegian Bokmål ' },
  { label: ' North Ndebele ' },
  { label: ' Nepali ' },
  { label: ' Ndonga ' },
  { label: ' Norwegian Nynorsk ' },
  { label: ' Norwegian ' },
  { label: ' Nuosu ' },
  { label: ' South Ndebele ' },
  { label: ' Occitan ' },
  { label: ' Ojibwe, Ojibwa ' },
  { label: ' Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic ' },
  { label: ' Oromo ' },
  { label: ' Oriya ' },
  { label: ' Ossetian, Ossetic ' },
  { label: ' Panjabi, Punjabi ' },
  { label: ' Pāli ' },
  { label: ' Persian ' },
  { label: ' Polish ' },
  { label: ' Pashto, Pushto ' },
  { label: ' Portuguese ' },
  { label: ' Quechua ' },
  { label: ' Romansh ' },
  { label: ' Kirundi ' },
  { label: ' Romanian, Moldavian, Moldovan ' },
  { label: ' Russian ' },
  { label: ' Sanskrit (Saṁskṛta) ' },
  { label: ' Sardinian ' },
  { label: ' Sindhi ' },
  { label: ' Northern Sami ' },
  { label: ' Samoan ' },
  { label: ' Sango ' },
  { label: ' Serbian ' },
  { label: ' Scottish Gaelic; Gaelic ' },
  { label: ' Shona ' },
  { label: ' Sinhala, Sinhalese ' },
  { label: ' Slovak ' },
  { label: ' Slovene ' },
  { label: ' Somali ' },
  { label: ' Southern Sotho ' },
  { label: ' Spanish; Castilian ' },
  { label: ' Sundanese ' },
  { label: ' Swahili ' },
  { label: ' Swati ' },
  { label: ' Swedish ' },
  { label: ' Tamil ' },
  { label: ' Telugu ' },
  { label: ' Tajik ' },
  { label: ' Thai ' },
  { label: ' Tigrinya ' },
  { label: ' Tibetan Standard, Tibetan, Central ' },
  { label: ' Turkmen ' },
  { label: ' Tagalog ' },
  { label: ' Tswana ' },
  { label: ' Tonga (Tonga Islands) ' },
  { label: ' Turkish ' },
  { label: ' Tsonga ' },
  { label: ' Tatar ' },
  { label: ' Twi ' },
  { label: ' Tahitian ' },
  { label: ' Uighur, Uyghur ' },
  { label: ' Ukrainian ' },
  { label: ' Urdu ' },
  { label: ' Uzbek ' },
  { label: ' Venda ' },
  { label: ' Vietnamese ' },
  { label: ' Volapük ' },
  { label: ' Walloon ' },
  { label: ' Welsh ' },
  { label: ' Wolof ' },
  { label: ' Western Frisian ' },
  { label: ' Xhosa ' },
  { label: ' Yiddish ' },
  { label: ' Yoruba ' },
  { label: ' Zhuang, Chuang ' }
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label,
}));

export const NATIONALITY_OPTIONS = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label,
}));


export const DAYSOFWEEK_OPTIONS = [
  {
    label: 'Monday',
    value: 'Monday',
  }, {
    label: 'Tuesday',
    value: 'Tuesday',
  }, {
    label: 'Wednesday',
    value: 'Wednesday',
  }, {
    label: 'Thursday',
    value: 'Thursday',
  }, {
    label: 'Friday',
    value: 'Friday',
  }, {
    label: 'Saturday',
    value: 'Saturday',
  }, {
    label: 'Sunday',
    value: 'Sunday',
  },
];
let monthRangeArr = [];
let monthRange = Array.from({ length: 31 }, (v, k) => {
  return monthRangeArr.push({ label: k + 1, value: k + 1 })
});
export const MONTH_RANGE_OPTIONS = monthRangeArr;

export const MONTH_OPTIONS = [
  {
    fullName: 'January',
    label: 'Jan',
    value: '01',
  }, {
    fullName: 'February',
    label: 'Fab',
    value: '02',
  }, {
    fullName: 'March',
    label: 'Mar',
    value: '03',
  }, {
    fullName: 'April',
    label: 'Apr',
    value: '04',
  }, {
    fullName: 'May',
    label: 'May',
    value: '05',
  }, {
    fullName: 'June',
    label: 'Jun',
    value: '06',
  }, {
    fullName: 'July',
    label: 'Jul',
    value: '07',
  }, {
    fullName: 'August',
    label: 'Aug',
    value: '08',
  }, {
    fullName: 'September',
    label: 'Sep',
    value: '09',
  }, {
    fullName: 'October',
    label: 'Oct',
    value: '10',
  }, {
    fullName: 'November',
    label: 'Nov',
    value: '11',
  }, {
    fullName: 'December',
    label: 'Dec',
    value: '12',
  }
];

export const VISITTYPE_OPTIONS = [
  {
    label: 'Hourly',
    value: 'Hourly',
  }, {
    label: '6 hours',
    value: '6 hours',
  }, {
    label: '12 hours',
    value: '12 hours',
  }, {
    label: 'Overnight - awake (10 hours)',
    value: 'Overnight - awake (10 hours)',
  }, {
    label: 'Overnight - asleep (10 hours)',
    value: 'Overnight - asleep (10 hours)',
  }, {
    label: 'Live-in (24 hour)',
    value: 'Live-in (24 hour)',
  }, {
    label: 'On-call',
    value: 'On-call',
  },
];

export const MEDICAL_CONDITION_OPTIONS = [
  {
    label: 'Other',
    value: 'other',
  }
]

export const RELATIVES_OPTIONS = [
  {
      label: 'Mother',
      value: 'Mother',
  },
  {
      label: 'Father',
      value: 'Father',
  },
  {
      label: 'Grandmother',
      value: 'Grandmother',
  },
  {
      label: 'Grandfather',
      value: 'Grandfather',
  },
  {
      label: 'Wife',
      value: 'Wife',
  },
  {
      label: 'Husband',
      value: 'Husband',
  },
  {
      label: 'Myself',
      value: 'Myself',
  },
  {
      label: 'Relative',
      value: 'Relative',
  },
  {
      label: 'Friend',
      value: 'Friend',
  },
  {
      label: 'Patient',
      value: 'Patient',
  }
]


export const INTEREST_AREA_OPTIONS = [
  {
    label: 'Antiques',
    value: 'Antiques',
  }, {
    label: 'Art',
    value: 'Art',
  }, {
    label: 'Cooking',
    value: 'Cooking',
  }, {
    label: 'Dancing',
    value: 'Dancing',
  }, {
    label: 'Exercise',
    value: 'Exercise',
  }, {
    label: 'Film',
    value: 'Film',
  }, {
    label: 'Food',
    value: 'Food',
  }, {
    label: 'Music',
    value: 'Music',
  }, {
    label: 'Politics',
    value: 'Politics',
  }, {
    label: 'Reading',
    value: 'Reading',
  }, {
    label: 'Spirtuality',
    value: 'Spirtuality',
  }, {
    label: 'Sport',
    value: 'Sport',
  }, {
    label: 'Travelling',
    value: 'Travelling',
  }, {
    label: 'Other',
    value: 'Other',
  }
];

export const DURATION_OPTIONS = [
  {
    label: '1 week',
    value: '1 week',
  }, {
    label: '1 month',
    value: '1 month',
  }, {
    label: '2 months',
    value: '2 months',
  }, {
    label: '3 months',
    value: '3 months',
  }
];

// Daily Weekly Monthly Yearly
export const FREQUENCY_OPTIONS = [
  {
    label: 'Daily',
    value: 'Daily',
  }, {
    label: 'Weekly',
    value: 'Weekly',
  }, {
    label: 'Monthly',
    value: 'Monthly',
  }, {
    label: 'Yearly',
    value: 'Yearly',
  }
];


export const MEDICATION_OPTIONS = [
  { label: 'Medication', field: 'medication', value1: 'yesMedication' },
  { label: 'No medication', field: 'medication', value1: 'noMedication' }
];

export const MEMORY_CONDITION_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Mild dementia', value: 'mildDementia' },
  { label: 'Moderate dementia', value: 'moderateDementia' },
  { label: 'Severe dementia ', value: 'severeDementia ' },
  { label: 'Diagnosed or undiagnosed', value: 'diagnosedOrUndiagnosed' },
];

export const PERSONAL_CARE_OPTIONS = [
  { label: 'Oral hygiene', value: 'oralHygiene' },
  { label: 'Toiletting', value: 'toileting' },
  { label: 'Contience assistence', value: 'contienceAssistence' },
  { label: 'Empty commode', value: 'emptyCommode' },
  { label: 'Catheter support', value: 'catheterSupport' },
  { label: 'Bath', value: 'bath' },
  { label: 'Bed bath', value: 'bedBath' },
  { label: 'Shower', value: 'shower' },
  { label: 'Hair wash', value: 'hairWash' },
  { label: 'Wash', value: 'wash' },
  { label: 'Shaving', value: 'shave' },
  { label: 'Help with dressing', value: 'helpWithDressing' },
  { label: 'Stoma', value: 'stoma' },
];

export const COMPANIONSHIP_OPTIONS = [
  { label: 'Social support', value: 'social_support' },
  { label: 'Emotional support', value: 'emotional_support' },
  { label: 'Decision making', value: 'decision_making' },
];

export const MEAL_PREPARATION_OPTIONS = [
  { label: 'Favourite foods', value: 'favourite_foods' },
  { label: 'Diet', value: 'diet' },
];

// To do add an where_is_medication_stored input
export const MEDICATION_REMINDERS_OPTIONS = [
  { label: 'Prompt', value: 'level_1_prompt' },
  { label: 'Adminstration', value: 'level_2_administration' },
  { label: 'Specilist', value: 'level_3_specialist' },
];

export const HOUSEKEEPING_OPTIONS = [
  { label: 'Laundary', value: 'laundry' },
  { label: 'Light cleaning', value: 'light_cleaning' },
  { label: 'Making/changing bed', value: 'make_change_bed' },
];

export const STAYING_ACTIVE_OPTIONS = [
  { label: 'Regular exercise', value: 'regularExercise' },
  { label: 'Breathlessness', value: 'breathlessness' },
  { label: 'Smoker/ alcohol', value: 'smokerAlcohol' },
];

export const TRANSPOTAION_OPTIONS = [
  { label: 'Car with insurance for carer', value: 'car_with_insurance_for_carer' },
  { label: 'uber', value: 'uber' },
  { label: 'Public transport', value: 'public_transport' },
  { label: 'Other', value: 'other_transport' },
];

export const MOBILITY_OPTIONS = [
  { label: 'Indoor mobility', value: 'indoor_mobility' },
  { label: 'Outdoor mobility', value: 'outdoor_mobility' },
  { label: 'Bed care', value: 'bed_care' },
  { label: 'Transfers', value: 'transfers' },
  { label: 'Washing', value: 'washing' },
  { label: 'Showering', value: 'showering' },
  { label: 'Under', value: 'under' },
  { label: 'Toileting', value: 'toileting' },
  { label: 'Undressing', value: 'undressing' },
  { label: 'Dressing', value: 'dressing' },
  { label: 'Stairs', value: 'stairs' },
  { label: 'Vehicle transfers', value: 'vehicle_transfers' },
  { label: '2 to 1 carers', value: '2To1Carers' },
  { label: 'Falls', value: 'falls' },
];

export const YES_NO_OPTIONS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

export const HRA_GENERAL_OPTIONS = [
  { label: 'Smoke detector', value: 'smokeDetector' },
  { label: 'Keys to windows and doors accessible', value: 'keysToWindowsAndDoorsAccessible' },
  { label: 'Doorbell working', value: 'doorbellWorking' },
  { label: 'Gas cut off point', value: 'gasCutOffPoint' },
  { label: 'Electricty cut off point', value: 'electricCutOffPoint' },
  { label: 'Water cut off point', value: 'waterCutOffPoint' },
  { label: 'Outside entrance is safe and lit', value: 'outsideEntranceIsSafeAndLit' },
  { label: 'Stairs and rails secure', value: 'stairsRailingSecure' },
  { label: 'Locks working', value: 'locksWorking' },
  { label: 'Carbon monoxide', value: 'carbonMonoxide' },
];

export const HRA_LIVING_AREA_OPTIONS = [
  { label: 'Doorways accessible', value: 'doorways_accessible' },
  { label: 'Uncluttered walkways', value: 'uncluttered_walkways' },
  { label: 'Flooring safe', value: 'flooring_safe' },
  { label: 'Lighting working', value: 'lighting_working' },
  { label: 'Electrical wires secured', value: 'electrical_wires_secured' },
];

export const HRA_KITCHEN_OPTIONS = [
  { label: 'Doorways accessible', value: 'doorways_accessible' },
  { label: 'Appliances working', value: 'appliances_working' },
  { label: 'Taps working', value: 'taps_working' },
  { label: 'Electrical wires appear safe', value: 'electric_wires_appear_safe' },
  { label: 'Fridge and freezer working', value: 'fridge_freezer_working' },
  { label: 'Cooker and hob working', value: 'cooker_hob_working' },
];

export const HRA_BEDROOM_OPTIONS = [
  { label: 'Doorways accessible', value: 'doorway_accessible' },
  { label: 'Appropriate transfer space', value: 'appropriate_transfer_space' },
  { label: 'Flooring safe', value: 'flooring_safe' },
  { label: 'Lighting working', value: 'lighting_working' },
  { label: 'Electrical wires safe', value: 'electrical_wires_safe' },
];

export const HRA_BATHROOM_OPTIONS = [
  { label: 'Shower bath', value: 'shower_bath' },
  { label: 'Non-slip mat', value: 'non_slip_mat' },
  { label: 'Toilet working', value: 'toilet_working' },
  { label: 'Flooring in good condition', value: 'flooring_condition' },
];


export const CARE_NEES_OPTIONS = [
  { label: 'Companionship', value: 'Companionship' },
  { label: 'Housekeeping', value: 'Housekeeping' },
  { label: 'Meal preparation', value: 'Meal preparation' },
  { label: 'Medication reminders', value: 'Medication reminders' },
  { label: 'Mobility', value: 'Mobility' },
  { label: 'Personal care', value: 'Personal care' },
  { label: 'Staying active', value: 'Staying active' },
  { label: 'Transportation', value: 'Transportation' },
];


export const CARE_SERVICES_OPTIONS = [
  { label: 'Palliative care', value: 'Palliative care' },
  { label: 'Dementia care', value: 'Dementia care' },
  { label: 'Respite care', value: 'Respite care' },
  { label: 'Post-discharge care', value: 'Post-discharge care' },
  { label: 'Disability care', value: 'Disability care' },
  { label: 'Cancer care', value: 'Cancer care' },
];
