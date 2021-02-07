/*
Sample Input
    {
        "businessOfInterestId": 10,
        "positiveReviews": [
            PositiveReview(
                "userId": 1,
                "businessId": 10
            ),
            PositiveReview(
                "userId": 2,
                "businessId": 10
            ),
            PositiveReview(
                "userId": 1,
                "businessId": 11
            ),
            PositiveReview(
                "userId": 2,
                "businessId": 11
            ),
            PositiveReview(
                "userId": 1,
                "businessId": 12
            ),
            PositiveReview(
                "userId": 2,
                "businessId": 12
            ),
            PositiveReview(
                "userId": 3,
                "businessId": 12
            )
        ]
    }

  const obj =  {1: [10, 11, 12],
                2: [10, 11, 12],
                3: [12]}

  const bs = [11, 12]
  
  A & B = 2
  A U B = 2
  
  r = (A & B) / (A U B)

  let maxSimilarity = 0;
  let maxSimilarityIndex = 0;

  for (let i = 0; i < bs.length; i ++) {
    let intersection = 0
    let union = 0 
  
    for (user in obj) {  
        if (obj[user].includes(businessOfInterestId) && obj[user].includes(bs[i])) {
          intersection += 1;
        }
        if (obj[user].includes(businessOfInterestId) || obj[user].includes(bs[i])) {
          union += 1;
        }
      }
    }

    const similarity = intersection / union

    if (similarity > maxSimilarity) {
      maxSimilarity = similarity
      maxSimilarityIndex = bs[i]
    }

    return maxSimilarityIndex
  }


Sample Output
    11

Business Similarity Score against business 10:
    11: 2 / (2 + 2 - 2) = 1.0
    12: 2 / (2 + 3 - 2) = 0.667
*/
function findMostSimilarBusiness(businessOfInterestId, positiveReviews) {
  // Todo: complete me    
  console.log(positiveReviews)
  const obj = {}
  for (let i = 0; i < positiveReviews.length; i ++) {   
      if (obj[positiveReviews[i].user_id] === undefined) {
          obj[positiveReviews[i].user_id] = {businessReviews: []}
      }
      obj[positiveReviews[i].userId].businessReviews.push(positiveReviews[i].businessId)
  }
  console.log(obj)
  // console.log(positiveReviews)
  // const userId = []
  
}