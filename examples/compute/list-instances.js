/*
 * Sample code to get list of instances in particular region, compartment.
 * You may still add more select criteria in ListInstancesRequest like compartmentId.
 * 
 * Sample Output (Masked):
 * Instance: ocid1.instance.oc1.iad.anu...xru2a
 */

const common = require("oci-common");
const core = require("oci-core");

const adp = new common.ConfigFileAuthenticationDetailsProvider();

const region = common.Region.US_ASHBURN_1;
const compartmentId = adp.getTenantId();

(async ()=> {
    //Create the compute client to query compute details.
    const computeClient = new core.ComputeClient({
        authenticationDetailsProvider: adp        
    });
    computeClient.region = region;

    //Prepare the request with more criteria.
    const listInstanceRequest = {
        compartmentId: compartmentId
    };

    //Execute the request
    const listInstanceResponse = await computeClient.listInstances(listInstanceRequest);

    //Read the response
    listInstanceResponse.items.forEach(instance => {
        console.log("Instance:", instance.id);
    })
})();
