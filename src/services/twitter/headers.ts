export const BEARER_TOKEN =
   'AAAAAAAAAAAAAAAAAAAAACXpTAEAAAAAaORDKUje94zRBplCvMRjOezackQ%3Duw7rE45g6umQbYoAY61I6QQLEJTQ5iHAd6R8YaGMYZHCty3wtH'

const headers = {
   'Content-Type': 'application/json',
   Authorization: `Bearer ${BEARER_TOKEN}`,
}
export const headers_oauth1 = {
   Authorization:
      'oauth_consumer_key=cnMEmP5tdY2nXVA4iWlrq40Ri&oauth_token=1015543898-Mkq72jfcOxGYJBNj2NzXkk8Za5dDcNpKE6hPc6X&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1630749998&oauth_nonce=DSoO3UktmBI&oauth_version=1.0&oauth_signature=ffNjotRtBdHF4XEp72huix0gLpE%3D',
}
export const oauth1_params =
   'oauth_consumer_key=cnMEmP5tdY2nXVA4iWlrq40Ri&oauth_token=1015543898-Mkq72jfcOxGYJBNj2NzXkk8Za5dDcNpKE6hPc6X&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1630749998&oauth_nonce=DSoO3UktmBI&oauth_version=1.0&oauth_signature=ffNjotRtBdHF4XEp72huix0gLpE%3D'
export default headers
