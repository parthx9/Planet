export const ScienceOptions = [
    { value: 'datascience', label: 'Data Science',core: ['COMP10001', ' COMP10002']},
    { value: 'computing', label: 'Computing',core: ['COMP10003', ' COMP10004']},
    
  ];

export const  CommerceOptions = [
    { value: 'economics', label: 'Economics'},
    { value: 'finance', label: 'Finance'},
    
    
  ];
export const BiomedOptions = [
    { value: 'pharmacology', label: 'Pharmacology'},
    { value: 'physiology', label: 'Physiology'},
    
    
  ];  


  export const groupedOptions = [
    {
      label: 'Science',
      options: ScienceOptions,
    },
    {
      label: 'Commerce',
      options: CommerceOptions,
    },
    {
      label: 'BioMedicine',
      options: BiomedOptions,
    }
  ];  