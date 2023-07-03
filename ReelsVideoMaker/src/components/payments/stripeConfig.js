import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NPn1YSGEQWw7sigymmp1p5Ic7w9RLmEtdWqs7126JCUcxfyWv5cIbjctPLLGztukKicMmBeRMi7BdIB7YPzp8GT009QW8uPz8');

export default stripePromise;
