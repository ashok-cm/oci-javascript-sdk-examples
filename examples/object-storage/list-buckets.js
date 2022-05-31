/*
 * Sample code to get list of buckets based on region, compartment, name space.
 * You may still add more select criteria in ListBucketsRequest like compartmentId, name space.
 * 
 * Note: set namespaceName as appropriate.
 * 
 * Sample Output:
 * [Bucket] Name: tagtestbucket3,
 * [Bucket] Name: testbucket1,
 * [Bucket] Name: testbucket2,
 */

const common = require("oci-common");
const objectstorage = require("oci-objectstorage");

const adp = new common.ConfigFileAuthenticationDetailsProvider();

const region = common.Region.US_ASHBURN_1;
const compartmentId = adp.getTenantId();
const namespaceName = "fa...cy";  // Update this

(async ()=> {
    //Create the object storage client to query object storage details.
    const osClient = new objectstorage.ObjectStorageClient({
        authenticationDetailsProvider: adp
    })
    osClient.region = region;

    //Prepare the request with more criteria.
    const listBucketsRequest = {
        compartmentId: compartmentId,
        namespaceName: namespaceName
    };

    //Execute the request
    const listBucketsResponse = await osClient.listBuckets(listBucketsRequest);

    //Read the response
    listBucketsResponse.items.forEach(bucket => {
        console.log("[Bucket] Name:", bucket.name);
    })
})();
