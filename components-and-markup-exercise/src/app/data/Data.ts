const data = [
  {  
    id: 1,
    title: 'BMW',
    description: ' ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin lectus eget volutpat pharetra. Suspendisse lacinia quam massa, id rutrum ex pretium porta. Integer eleifend bibendum gravida. Phasellus pulvinar fringilla tellus sed commodo. Phasellus a tortor tempus, accumsan dui non, lobortis quam. Ut pharetra erat et auctor venenatis. Integer turpis mi, porttitor pulvinar sollicitudin quis, iaculis eget urna. Fusce iaculis metus et massa dapibus sagittis. Mauris egestas lacinia mauris at luctus. Sed et velit ut dolor faucibus accumsan. Nulla vel varius neque, nec dignissim massa. Fusce convallis dui eu tellus imperdiet, vel pharetra risus aliquet. Morbi tortor massa, vulputate id metus id, imperdiet iaculis magna. Maecenas luctus venenatis quam, et volutpat magna egestas ac. Mauris at risus lacus.Donec non velit erat. Donec tristique nisl eu erat molestie, id lobortis lacus varius. Nunc purus lacus, finibus ac placerat sit amet, imperdiet ac leo. Aliquam facilisis efficitur ex vel finibus. Aliquam ornare id urna a vulputate. Etiam tempus non nisl sed rhoncus. Duis dapibus dolor in arcu mattis, in euismod massa condimentum. Suspendisse nulla nisl, tempus non elit vestibulum, congue sodales anteDuis tristique mauris ligula, et commodo risus finibus sed. Mauris lacus lorem, porta vel erat vel, fermentum mattis orci. Ut ac nisi sit amet tortor condimentum accumsan nec id risus. Duis vel leo finibus, commodo leo ac, pulvinar magna. Quisque tincidunt ornare mi, et scelerisque turpis placerat sed. In semper tortor eleifend velit commodo fringilla. Etiam nec ligula ante. Nulla vitae nisi vitae dolor efficitur ornare non eu lectus. Ut at sem sit amet libero tempor vulputate tempus vel ligula. Sed nisl magna, lobortis vel metus cursus, facilisis porta risus.',
    photoUrl: 'https://www.bmw.com/content/dam/bmw/common/all-models/m-series/x6m/2014/model-card/X6-M-F86_ModelCard.png'
  },
  {  
    id: 2,
    title: 'Mercedes',
    description: 'ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin lectus eget volutpat pharetra. Suspendisse lacinia quam massa, id rutrum ex pretium porta. Integer eleifend bibendum gravida. Phasellus pulvinar fringilla tellus sed commodo. Phasellus a tortor tempus, accumsan dui non, lobortis quam. Ut pharetra erat et auctor venenatis. Integer turpis mi, porttitor pulvinar sollicitudin quis, iaculis eget urna. Fusce iaculis metus et massa dapibus sagittis. Mauris egestas lacinia mauris at luctus. Sed et velit ut dolor faucibus accumsan. Nulla vel varius neque, nec dignissim massa. Fusce convallis dui eu tellus imperdiet, vel pharetra risus aliquet. Morbi tortor massa, vulputate id metus id, imperdiet iaculis magna. Maecenas luctus venenatis quam, et volutpat magna egestas ac. Mauris at risus lacus.Donec non velit erat. Donec tristique nisl eu erat molestie, id lobortis lacus varius. Nunc purus lacus, finibus ac placerat sit amet, imperdiet ac leo. Aliquam facilisis efficitur ex vel finibus. Aliquam ornare id urna a vulputate. Etiam tempus non nisl sed rhoncus. Duis dapibus dolor in arcu mattis, in euismod massa condimentum. Suspendisse nulla nisl, tempus non elit vestibulum, congue sodales anteDuis tristique mauris ligula, et commodo risus finibus sed. Mauris lacus lorem, porta vel erat vel, fermentum mattis orci. Ut ac nisi sit amet tortor condimentum accumsan nec id risus. Duis vel leo finibus, commodo leo ac, pulvinar magna. Quisque tincidunt ornare mi, et scelerisque turpis placerat sed. In semper tortor eleifend velit commodo fringilla. Etiam nec ligula ante. Nulla vitae nisi vitae dolor efficitur ornare non eu lectus. Ut at sem sit amet libero tempor vulputate tempus vel ligula. Sed nisl magna, lobortis vel metus cursus, facilisis porta risus.',
    photoUrl: 'http://www.mercedes-benz.ca/content/media_library/hq/hq_mpc_reference_site/passenger_cars_ng/new_cars/models/model_navigation_library/e-class-coupe_c238_705x325_ReNaTe_jpg.object-Single-MEDIA.tmp/e-class-coupe_c238_705x325_ReNaTe.jpg'
  },
  {  
    id: 3,
    title: 'Porsche',
    description: 'psum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin lectus eget volutpat pharetra. Suspendisse lacinia quam massa, id rutrum ex pretium porta. Integer eleifend bibendum gravida. Phasellus pulvinar fringilla tellus sed commodo. Phasellus a tortor tempus, accumsan dui non, lobortis quam. Ut pharetra erat et auctor venenatis. Integer turpis mi, porttitor pulvinar sollicitudin quis, iaculis eget urna. Fusce iaculis metus et massa dapibus sagittis. Mauris egestas lacinia mauris at luctus. Sed et velit ut dolor faucibus accumsan. Nulla vel varius neque, nec dignissim massa. Fusce convallis dui eu tellus imperdiet, vel pharetra risus aliquet. Morbi tortor massa, vulputate id metus id, imperdiet iaculis magna. Maecenas luctus venenatis quam, et volutpat magna egestas ac. Mauris at risus lacus.Donec non velit erat. Donec tristique nisl eu erat molestie, id lobortis lacus varius. Nunc purus lacus, finibus ac placerat sit amet, imperdiet ac leo. Aliquam facilisis efficitur ex vel finibus. Aliquam ornare id urna a vulputate. Etiam tempus non nisl sed rhoncus. Duis dapibus dolor in arcu mattis, in euismod massa condimentum. Suspendisse nulla nisl, tempus non elit vestibulum, congue sodales anteDuis tristique mauris ligula, et commodo risus finibus sed. Mauris lacus lorem, porta vel erat vel, fermentum mattis orci. Ut ac nisi sit amet tortor condimentum accumsan nec id risus. Duis vel leo finibus, commodo leo ac, pulvinar magna. Quisque tincidunt ornare mi, et scelerisque turpis placerat sed. In semper tortor eleifend velit commodo fringilla. Etiam nec ligula ante. Nulla vitae nisi vitae dolor efficitur ornare non eu lectus. Ut at sem sit amet libero tempor vulputate tempus vel ligula. Sed nisl magna, lobortis vel metus cursus, facilisis porta risus.',
    photoUrl: 'https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/porsche-gt3-rs-rt-026.jpg'
  },
  {  
    id: 4,
    title: 'Opel',
    description: 'ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin lectus eget volutpat pharetra. Suspendisse lacinia quam massa, id rutrum ex pretium porta. Integer eleifend bibendum gravida. Phasellus pulvinar fringilla tellus sed commodo. Phasellus a tortor tempus, accumsan dui non, lobortis quam. Ut pharetra erat et auctor venenatis. Integer turpis mi, porttitor pulvinar sollicitudin quis, iaculis eget urna. Fusce iaculis metus et massa dapibus sagittis. Mauris egestas lacinia mauris at luctus. Sed et velit ut dolor faucibus accumsan. Nulla vel varius neque, nec dignissim massa. Fusce convallis dui eu tellus imperdiet, vel pharetra risus aliquet. Morbi tortor massa, vulputate id metus id, imperdiet iaculis magna. Maecenas luctus venenatis quam, et volutpat magna egestas ac. Mauris at risus lacus.Donec non velit erat. Donec tristique nisl eu erat molestie, id lobortis lacus varius. Nunc purus lacus, finibus ac placerat sit amet, imperdiet ac leo. Aliquam facilisis efficitur ex vel finibus. Aliquam ornare id urna a vulputate. Etiam tempus non nisl sed rhoncus. Duis dapibus dolor in arcu mattis, in euismod massa condimentum. Suspendisse nulla nisl, tempus non elit vestibulum, congue sodales anteDuis tristique mauris ligula, et commodo risus finibus sed. Mauris lacus lorem, porta vel erat vel, fermentum mattis orci. Ut ac nisi sit amet tortor condimentum accumsan nec id risus. Duis vel leo finibus, commodo leo ac, pulvinar magna. Quisque tincidunt ornare mi, et scelerisque turpis placerat sed. In semper tortor eleifend velit commodo fringilla. Etiam nec ligula ante. Nulla vitae nisi vitae dolor efficitur ornare non eu lectus. Ut at sem sit amet libero tempor vulputate tempus vel ligula. Sed nisl magna, lobortis vel metus cursus, facilisis porta risus.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Opel_Astra_%284559359674%29.jpg/280px-Opel_Astra_%284559359674%29.jpg'
  }
];

export default data;
