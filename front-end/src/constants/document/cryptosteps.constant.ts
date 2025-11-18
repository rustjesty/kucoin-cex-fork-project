interface IStep {
  title: string;
  content: string;
}

const CRYPTO_STEPS_DATA: IStep[] = [
  {
    title: 'Create an OXFX account',
    content: 'Sign up on OXFX with your email address/phone number and country of residence, then create a strong password to secure your account.',
  },
  {
    title: 'Verify your account',
    content: 'Verify your identity by uploading the required ID documents. We make this process easy',
  },
  {
    title: 'Add a payment method',
    content: 'Add your credit card, debit card, or other payment methods to buy cryptocurrency. OXFX supports over multiple methods.',
  },
  {
    title: 'Buy Cryptocurrency',
    content: 'You can now easily and securely purchase Bitcoin and other cryptocurrencies on OXFX using USD, EUR, AUD, INR, RUB, and over 48 other local currencies - depending on where you reside.'
  }
]

export {
  CRYPTO_STEPS_DATA
}