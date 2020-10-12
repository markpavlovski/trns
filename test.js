const fs = require('fs');
const data = {
  accounts: [{
      account_id: 'L6kVvaqx67F3VR75D8APtVE0rPNjY1I0pvQo1',
      balances: {
        available: 18000,
        current: 0,
        iso_currency_code: 'USD',
        limit: 18000,
        unofficial_currency_code: null
      },
      mask: '0579',
      name: 'Loan Mastercard',
      official_name: 'BankAmericard Platinum Plus Mastercard',
      subtype: 'credit card',
      type: 'credit'
    },
    {
      account_id: 'zJNekpamJyIREkqw14X5cjwb5Ddq8zIOg1QAE',
      balances: {
        available: 520.74,
        current: 540.74,
        iso_currency_code: 'USD',
        limit: null,
        unofficial_currency_code: null
      },
      mask: '2760',
      name: 'Marks Debit',
      official_name: 'Adv Plus Banking',
      subtype: 'checking',
      type: 'depository'
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      balances: {
        available: 20880.01,
        current: 1119.99,
        iso_currency_code: 'USD',
        limit: 22000,
        unofficial_currency_code: null
      },
      mask: '3157',
      name: 'Alaska Visa',
      official_name: 'Alaska Airlines Visa Signature',
      subtype: 'credit card',
      type: 'credit'
    },
    {
      account_id: 'mByeZnk9BRfxqnrP8MmKH0LybrYep6HMVAPr0',
      balances: {
        available: 505,
        current: 505,
        iso_currency_code: 'USD',
        limit: null,
        unofficial_currency_code: null
      },
      mask: '4855',
      name: 'Emergency Fund',
      official_name: 'Advantage Savings',
      subtype: 'savings',
      type: 'depository'
    },
    {
      account_id: 'dbwevVL3bXUOrgYRBzv6CJLdrPQm4BUbdwR0r',
      balances: {
        available: 1000,
        current: 1000,
        iso_currency_code: 'USD',
        limit: null,
        unofficial_currency_code: null
      },
      mask: '4952',
      name: 'Travel Fund',
      official_name: 'Advantage Savings',
      subtype: 'savings',
      type: 'depository'
    },
    {
      account_id: '6MdkomeLMZcyVAaKQ8vRUPenBvXw8OIa3Dr03',
      balances: {
        available: 4000,
        current: 0,
        iso_currency_code: 'USD',
        limit: 4000,
        unofficial_currency_code: null
      },
      mask: '7156',
      name: 'Katies Unused Visa',
      official_name: 'Bank of America Travel Rewards Visa Signature',
      subtype: 'credit card',
      type: 'credit'
    }
  ],
  item: {
    available_products: ['auth', 'balance'],
    billed_products: ['transactions'],
    consent_expiration_time: null,
    error: null,
    institution_id: 'ins_1',
    item_id: 'AM7ZLE8JMncP5Be7ZAoVcq6PPm6Rjnh6y8QZa',
    webhook: ''
  },
  request_id: 'lnose9ryXLjvWwq',
  total_transactions: 249,
  transactions: [{
      account_id: 'zJNekpamJyIREkqw14X5cjwb5Ddq8zIOg1QAE',
      account_owner: null,
      amount: 20,
      authorized_date: '2020-07-03',
      category: ['Transfer', 'Withdrawal', 'ATM'],
      category_id: '21012002',
      date: '2020-07-04',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: 'Seattle',
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: 'WA',
        store_number: null
      },
      merchant_name: null,
      name: 'BANK OF AMERICA ATM 07/03 #000000002586 WITHDRWL BALLARD MAIN',
      payment_channel: 'other',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'w4NY3ORg4mfjZL8O6VEeIbwLON41MDFLaxbMw',
      transaction_type: 'special',
      unofficial_currency_code: null
    },
    {
      account_id: 'zJNekpamJyIREkqw14X5cjwb5Ddq8zIOg1QAE',
      account_owner: null,
      amount: 1000,
      authorized_date: null,
      category: ['Transfer', 'Debit'],
      category_id: '21006000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: null
      },
      merchant_name: null,
      name: 'Online Banking payment to CRD 3157 Confirmation# 4082003242',
      payment_channel: 'other',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: false,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: '6MdkomeLMZcyVAaKQ8vRUPeDa5978KFa3DrYo',
      transaction_type: 'special',
      unofficial_currency_code: null
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      account_owner: null,
      amount: 18.5,
      authorized_date: null,
      category: ['Shops', 'Supermarkets and Groceries'],
      category_id: '19047000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: null
      },
      merchant_name: null,
      name: 'PCC - BALLARD',
      payment_channel: 'in store',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'AM7ZLE8JMncP5Be7ZAoVcq641YODEpc67vyjk',
      transaction_type: 'place',
      unofficial_currency_code: null
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      account_owner: null,
      amount: -1000,
      authorized_date: null,
      category: ['Transfer', 'Credit'],
      category_id: '21005000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: null
      },
      merchant_name: null,
      name: 'PENDING PAYMENT',
      payment_channel: 'other',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'j1qmxV3M1RUmDRMZ0QxeHzbAn8Jej7URLdo3e',
      transaction_type: 'special',
      unofficial_currency_code: null
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      account_owner: null,
      amount: 7.55,
      authorized_date: null,
      category: ['Shops', 'Food and Beverage Store'],
      category_id: '19025000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: null
      },
      merchant_name: 'Salt & Straw',
      name: 'SALT & STRAW ICE C',
      payment_channel: 'in store',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: 'Square',
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'kPBeJnyNPRHm1BgZRV53HPJ3V65zZqFRqrYEr',
      transaction_type: 'place',
      unofficial_currency_code: null
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      account_owner: null,
      amount: 4.71,
      authorized_date: null,
      category: ['Shops', 'Hardware Store'],
      category_id: '19030000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: null
      },
      merchant_name: 'Stoneway Hardware',
      name: 'STONEWAY HARDWARE',
      payment_channel: 'in store',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: '0MKPz8ngM6cKEBn18XVxtqBkNK18pzcrbkzJr',
      transaction_type: 'place',
      unofficial_currency_code: null
    },
    {
      account_id: 'zJNekpamJyIREkqw14X5cjwb5Ddq8zIOg1QAE',
      account_owner: null,
      amount: -850,
      authorized_date: null,
      category: ['Transfer', 'Third Party', 'Square'],
      category_id: '21010003',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: null
      },
      merchant_name: null,
      name: 'Square Inc DES:* Cash App ID:T200249267023 INDN:Mark Pavlovski CO ID:XXXXX29876 CCD',
      payment_channel: 'other',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: false,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'L6kVvaqx67F3VR75D8APtVEewzbkYKf0pvQ8j',
      transaction_type: 'special',
      unofficial_currency_code: null
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      account_owner: null,
      amount: 62.09,
      authorized_date: null,
      category: ['Shops', 'Supermarkets and Groceries'],
      category_id: '19047000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: '147'
      },
      merchant_name: 'Trader Joe\'s',
      name: 'Trader Joe\'s',
      payment_channel: 'in store',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'vrYeB0gPrkfRaLDENVYxcPNRyYJjM9FmQ9bgM',
      transaction_type: 'place',
      unofficial_currency_code: null
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      account_owner: null,
      amount: 25.05,
      authorized_date: null,
      category: ['Food and Drink', 'Restaurants'],
      category_id: '13005000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: null
      },
      merchant_name: 'Un Bien',
      name: 'UN BIEN',
      payment_channel: 'in store',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: 'Square',
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: '4M5yOQnwMPcJzm4xOpkZs6bKD15xOpIkXKpqn',
      transaction_type: 'place',
      unofficial_currency_code: null
    },
    {
      account_id: 'w4NY3ORg4mfjZL8O6VEeIbwveyQzMpHLaxbdY',
      account_owner: null,
      amount: 1100.99,
      authorized_date: null,
      category: ['Shops', 'Marine Supplies'],
      category_id: '19035000',
      date: '2020-07-03',
      iso_currency_code: 'USD',
      location: {
        address: null,
        city: null,
        country: null,
        lat: null,
        lon: null,
        postal_code: null,
        region: null,
        store_number: '300'
      },
      merchant_name: 'West Marine',
      name: 'West Marine',
      payment_channel: 'in store',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null
      },
      pending: true,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'rm0eDVrEm5hwDdgZ4YXjHmOrAD36M7HBv6Mbr',
      transaction_type: 'place',
      unofficial_currency_code: null
    }
  ],
  status_code: 200
};

const accountId = data.accounts.find(({name}) => name === "Alaska Visa").account_id;
const filtered = data.transactions
  .filter(({account_id})=>account_id ===accountId)
  .map(({name,amount,date, category}) => ({name, amount,date, category}));


const csv = filtered.reduce((acc,{name,amount,date, category}) => acc+`${date},${amount},${name},${category}\n`,'Date,Amount,Name,Category\n')
console.log(csv)


fs.writeFileSync('downloads/test.csv', csv)
