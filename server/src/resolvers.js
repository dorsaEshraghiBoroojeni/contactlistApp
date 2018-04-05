const channels = [{
  id: 1,
  firstname: 'Cameron',
  lastname: 'Dubas',
  phone:  '6047280012',
  email:  'cameron@changeheroes.com',
  address: '289 Abbott St., Vancouver, BC, V3M 2L7'
}, {
  id:2,
  firstname: 'Mike',
  lastname:  'Tan',
  email: 'mike@changeheroes.com',
  address: '102 Homer St., Vancouver, BC, V2K 3G7',
  phone:  '6043421109'

},
{
  id:3,
  firstname: 'Ryan',
  lastname:  'Campbell',
  email: 'ryan@changeheroes.com',
  address: '1807 Granville St, Vancouver, BC, V7G 2F9',
  phone:  '6049881822'

},
{
  id:4,
  firstname: 'Steven',
  lastname:  'Zozula',
  email: 'steven@changeheroes.com',
  address: '100 Water St., Vancouver, BC, V8I 2G3',
  phone:  '6045200192'

},
{
  id:5,
  firstname: 'Daryl',
  lastname:  'Chmyko',
  email: 'daryl@changeheroes.com',
  address: '289 Cordova St., Vancouver, BC, V6B 2L4',
  phone:  '6042240422'

},
{
  id:6,
  firstname:'Aaron',
  lastname:'Vandenbrink',
   phone:'6047581029',
   address:'200 Abbott St., Vancouver, BC, V9M 3K2',
   email:'aaron.vandenbrink@gmail.com'
}
];

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel:(root, {id}) =>{
      return channels.find(channel => channel.id === id);
    }
  },

  Mutation: {
    edit: (root, args) => {
      var current = channels.find(channel => channel.id === args.id);
      if(args.email)
        current.email = args.email;
      if(args.phone)
        current.phone = args.phone;
      if(args.address)
        current.address = args.address;
      return current;
    }
  }
};
