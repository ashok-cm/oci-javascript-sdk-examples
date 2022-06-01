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
const instanceId = "<instance-ocid>";
const instanceAction = "SOFTSTOP"; // Refer: https://docs.oracle.com/en-us/iaas/tools/oci-cli/2.12.7/oci_cli_docs/cmdref/compute/instance/action.html

(async ()=> {
    //Create the compute client to query compute details.
    const computeClient = new core.ComputeClient({
        authenticationDetailsProvider: adp        
    });
    computeClient.region = region;

    const instanceActionRequest = {
        instanceId: instanceId,
        action: instanceAction
    };
    const instanceActionResponse = await computeClient.instanceAction(instanceActionRequest);
    console.log(instanceActionResponse);
})();
