# IdentityChain API

IdentityChain Agent REST API

Version: 0.2.0

BasePath:/

## Access

1.  APIKey KeyParamName:Authorization KeyInQuery:false KeyInHeader:true

## <span id="__Methods">Methods</span>

\[ Jump to [Models](#__Models) \]

### Table of Contents

#### [Common](#Common)

-   [`delete /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdDelete)
-   [`get /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdGet)
-   [`delete /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdDelete)
-   [`get /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdGet)
-   [`get /api/connectionrequest`](#apiConnectionrequestGet)
-   [`post /api/connectionrequest`](#apiConnectionrequestPost)
-   [`post /api/connectionresponse`](#apiConnectionresponsePost)
-   [`post /api/login`](#apiLoginPost)
-   [`post /api/user`](#apiUserPost)
-   [`delete /api/user/{user}`](#apiUserUserDelete)
-   [`get /api/user/{user}`](#apiUserUserGet)
-   [`put /api/user/{user}`](#apiUserUserPut)
-   [`get /api/wallet`](#apiWalletGet)
-   [`post /api/wallet`](#apiWalletPost)
-   [`get /api/wallet/{wallet}/connection/`](#apiWalletWalletConnectionGet)
-   [`get /api/wallet/{wallet}/connection/{theirDid}`](#apiWalletWalletConnectionTheirDidGet)
-   [`delete /api/wallet/{wallet}`](#apiWalletWalletDelete)
-   [`get /api/wallet/{wallet}`](#apiWalletWalletGet)

#### [Connection](#Connection)

-   [`get /api/connection/{myDid}`](#apiConnectionMyDidGet)
-   [`delete /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdDelete)
-   [`get /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdGet)
-   [`get /api/connectionoffer`](#apiConnectionofferGet)
-   [`post /api/connectionoffer`](#apiConnectionofferPost)
-   [`delete /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdDelete)
-   [`get /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdGet)
-   [`get /api/connectionrequest`](#apiConnectionrequestGet)
-   [`post /api/connectionrequest`](#apiConnectionrequestPost)
-   [`post /api/connectionresponse`](#apiConnectionresponsePost)

#### [Credential](#Credential)

-   [`get /api/credential/`](#apiCredentialGet)
-   [`get /api/credential/{id}`](#apiCredentialIdGet)
-   [`post /api/credential/{id}/revoke`](#apiCredentialIdRevokePost)
-   [`post /api/credential/`](#apiCredentialPost)
-   [`get /api/credentialdef/{creddef}`](#apiCredentialdefCreddefGet)
-   [`get /api/credentialdef`](#apiCredentialdefGet)
-   [`post /api/credentialdef`](#apiCredentialdefPost)
-   [`get /api/credentialoffer`](#apiCredentialofferGet)
-   [`delete /api/credentialoffer/{id}`](#apiCredentialofferIdDelete)
-   [`get /api/credentialoffer/{id}`](#apiCredentialofferIdGet)
-   [`post /api/credentialoffer`](#apiCredentialofferPost)
-   [`get /api/credentialrequest`](#apiCredentialrequestGet)
-   [`delete /api/credentialrequest/{id}`](#apiCredentialrequestIdDelete)
-   [`get /api/credentialrequest/{id}`](#apiCredentialrequestIdGet)
-   [`post /api/credentialrequest`](#apiCredentialrequestPost)

#### [Indyschema](#Indyschema)

-   [`get /api/indyschema`](#apiIndyschemaGet)
-   [`post /api/indyschema`](#apiIndyschemaPost)
-   [`get /api/indyschema/{schemaid}`](#apiIndyschemaSchemaidGet)

#### [Issuer](#Issuer)

-   [`get /api/attribute/type`](#apiAttributeTypeGet)
-   [`get /api/connection/{myDid}`](#apiConnectionMyDidGet)
-   [`delete /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdDelete)
-   [`get /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdGet)
-   [`get /api/connectionoffer`](#apiConnectionofferGet)
-   [`post /api/connectionoffer`](#apiConnectionofferPost)
-   [`delete /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdDelete)
-   [`get /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdGet)
-   [`get /api/connectionrequest`](#apiConnectionrequestGet)
-   [`post /api/connectionrequest`](#apiConnectionrequestPost)
-   [`post /api/connectionresponse`](#apiConnectionresponsePost)
-   [`get /api/credential/`](#apiCredentialGet)
-   [`get /api/credential/{id}`](#apiCredentialIdGet)
-   [`post /api/credential/{id}/revoke`](#apiCredentialIdRevokePost)
-   [`post /api/credential/`](#apiCredentialPost)
-   [`get /api/credentialdef/{creddef}`](#apiCredentialdefCreddefGet)
-   [`get /api/credentialdef`](#apiCredentialdefGet)
-   [`post /api/credentialdef`](#apiCredentialdefPost)
-   [`get /api/credentialoffer`](#apiCredentialofferGet)
-   [`delete /api/credentialoffer/{id}`](#apiCredentialofferIdDelete)
-   [`get /api/credentialoffer/{id}`](#apiCredentialofferIdGet)
-   [`post /api/credentialoffer`](#apiCredentialofferPost)
-   [`get /api/credentialrequest`](#apiCredentialrequestGet)
-   [`delete /api/credentialrequest/{id}`](#apiCredentialrequestIdDelete)
-   [`get /api/credentialrequest/{id}`](#apiCredentialrequestIdGet)
-   [`post /api/credentialrequest`](#apiCredentialrequestPost)
-   [`get /api/indyschema`](#apiIndyschemaGet)
-   [`post /api/indyschema`](#apiIndyschemaPost)
-   [`get /api/indyschema/{schemaid}`](#apiIndyschemaSchemaidGet)
-   [`post /api/login`](#apiLoginPost)
-   [`get /api/schema`](#apiSchemaGet)
-   [`post /api/schema`](#apiSchemaPost)
-   [`get /api/schema/{schemaid}`](#apiSchemaSchemaidGet)
-   [`patch /api/schema/{schemaid}`](#apiSchemaSchemaidPatch)
-   [`post /api/user`](#apiUserPost)
-   [`delete /api/user/{user}`](#apiUserUserDelete)
-   [`get /api/user/{user}`](#apiUserUserGet)
-   [`put /api/user/{user}`](#apiUserUserPut)
-   [`get /api/wallet`](#apiWalletGet)
-   [`post /api/wallet`](#apiWalletPost)
-   [`get /api/wallet/{wallet}/connection/`](#apiWalletWalletConnectionGet)
-   [`get /api/wallet/{wallet}/connection/{theirDid}`](#apiWalletWalletConnectionTheirDidGet)
-   [`delete /api/wallet/{wallet}`](#apiWalletWalletDelete)
-   [`get /api/wallet/{wallet}`](#apiWalletWalletGet)
-   [`get /tails/{revocRegDefId}`](#tailsRevocRegDefIdGet)

#### [Message](#Message)

-   [`get /api/message/`](#apiMessageGet)
-   [`delete /api/message/{messageId}`](#apiMessageMessageIdDelete)
-   [`get /api/message/{messageId}`](#apiMessageMessageIdGet)
-   [`post /api/message/`](#apiMessagePost)
-   [`post /indy/`](#indyPost)

#### [Proof](#Proof)

-   [`get /api/proof`](#apiProofGet)
-   [`delete /api/proof/{id}`](#apiProofIdDelete)
-   [`get /api/proof/{id}`](#apiProofIdGet)
-   [`post /api/proof`](#apiProofPost)
-   [`get /api/proofrequest`](#apiProofrequestGet)
-   [`delete /api/proofrequest/{id}`](#apiProofrequestIdDelete)
-   [`get /api/proofrequest/{id}`](#apiProofrequestIdGet)
-   [`post /api/proofrequest`](#apiProofrequestPost)
-   [`get /api/proofrequesttemplate`](#apiProofrequesttemplateGet)
-   [`delete /api/proofrequesttemplate/{id}`](#apiProofrequesttemplateIdDelete)
-   [`get /api/proofrequesttemplate/{id}`](#apiProofrequesttemplateIdGet)
-   [`put /api/proofrequesttemplate/{id}`](#apiProofrequesttemplateIdPut)
-   [`post /api/proofrequesttemplate`](#apiProofrequesttemplatePost)
-   [`get /tails/{revocRegDefId}`](#tailsRevocRegDefIdGet)

#### [Prover](#Prover)

-   [`delete /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdDelete)
-   [`get /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdGet)
-   [`delete /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdDelete)
-   [`get /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdGet)
-   [`get /api/connectionrequest`](#apiConnectionrequestGet)
-   [`post /api/connectionrequest`](#apiConnectionrequestPost)
-   [`post /api/connectionresponse`](#apiConnectionresponsePost)
-   [`get /api/credentialoffer`](#apiCredentialofferGet)
-   [`delete /api/credentialoffer/{id}`](#apiCredentialofferIdDelete)
-   [`get /api/credentialoffer/{id}`](#apiCredentialofferIdGet)
-   [`get /api/credentialrequest`](#apiCredentialrequestGet)
-   [`delete /api/credentialrequest/{id}`](#apiCredentialrequestIdDelete)
-   [`get /api/credentialrequest/{id}`](#apiCredentialrequestIdGet)
-   [`post /api/login`](#apiLoginPost)
-   [`post /api/proof`](#apiProofPost)
-   [`get /api/proofrequest`](#apiProofrequestGet)
-   [`delete /api/proofrequest/{id}`](#apiProofrequestIdDelete)
-   [`get /api/proofrequest/{id}`](#apiProofrequestIdGet)
-   [`post /api/user`](#apiUserPost)
-   [`delete /api/user/{user}`](#apiUserUserDelete)
-   [`get /api/user/{user}`](#apiUserUserGet)
-   [`put /api/user/{user}`](#apiUserUserPut)
-   [`get /api/wallet`](#apiWalletGet)
-   [`post /api/wallet`](#apiWalletPost)
-   [`get /api/wallet/{wallet}/connection/`](#apiWalletWalletConnectionGet)
-   [`get /api/wallet/{wallet}/connection/{theirDid}`](#apiWalletWalletConnectionTheirDidGet)
-   [`get /api/wallet/{wallet}/credential/{credential}`](#apiWalletWalletCredentialCredentialGet)
-   [`get /api/wallet/{wallet}/credential/`](#apiWalletWalletCredentialGet)
-   [`delete /api/wallet/{wallet}`](#apiWalletWalletDelete)
-   [`get /api/wallet/{wallet}`](#apiWalletWalletGet)
-   [`get /tails/{revocRegDefId}`](#tailsRevocRegDefIdGet)

#### [Schema](#Schema)

-   [`get /api/attribute/type`](#apiAttributeTypeGet)
-   [`get /api/schema`](#apiSchemaGet)
-   [`post /api/schema`](#apiSchemaPost)
-   [`get /api/schema/{schemaid}`](#apiSchemaSchemaidGet)
-   [`patch /api/schema/{schemaid}`](#apiSchemaSchemaidPatch)

#### [Transaction](#Transaction)

-   [`get /api/nym/{did}`](#apiNymDidGet)
-   [`post /api/nym`](#apiNymPost)
-   [`get /api/transactions`](#apiTransactionsGet)

#### [User](#User)

-   [`post /api/login`](#apiLoginPost)
-   [`post /api/user`](#apiUserPost)
-   [`delete /api/user/{user}`](#apiUserUserDelete)
-   [`get /api/user/{user}`](#apiUserUserGet)
-   [`put /api/user/{user}`](#apiUserUserPut)

#### [Verifier](#Verifier)

-   [`get /api/connection/{myDid}`](#apiConnectionMyDidGet)
-   [`delete /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdDelete)
-   [`get /api/connectionoffer/{connectionOfferId}`](#apiConnectionofferConnectionOfferIdGet)
-   [`get /api/connectionoffer`](#apiConnectionofferGet)
-   [`post /api/connectionoffer`](#apiConnectionofferPost)
-   [`delete /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdDelete)
-   [`get /api/connectionrequest/{connectionRequestId}`](#apiConnectionrequestConnectionRequestIdGet)
-   [`get /api/connectionrequest`](#apiConnectionrequestGet)
-   [`post /api/connectionrequest`](#apiConnectionrequestPost)
-   [`post /api/connectionresponse`](#apiConnectionresponsePost)
-   [`get /api/indyschema/{schemaid}`](#apiIndyschemaSchemaidGet)
-   [`post /api/login`](#apiLoginPost)
-   [`get /api/proof`](#apiProofGet)
-   [`delete /api/proof/{id}`](#apiProofIdDelete)
-   [`get /api/proof/{id}`](#apiProofIdGet)
-   [`get /api/proofrequest`](#apiProofrequestGet)
-   [`delete /api/proofrequest/{id}`](#apiProofrequestIdDelete)
-   [`get /api/proofrequest/{id}`](#apiProofrequestIdGet)
-   [`post /api/proofrequest`](#apiProofrequestPost)
-   [`get /api/proofrequesttemplate`](#apiProofrequesttemplateGet)
-   [`delete /api/proofrequesttemplate/{id}`](#apiProofrequesttemplateIdDelete)
-   [`get /api/proofrequesttemplate/{id}`](#apiProofrequesttemplateIdGet)
-   [`put /api/proofrequesttemplate/{id}`](#apiProofrequesttemplateIdPut)
-   [`post /api/proofrequesttemplate`](#apiProofrequesttemplatePost)
-   [`get /api/schema/{schemaid}`](#apiSchemaSchemaidGet)
-   [`post /api/user`](#apiUserPost)
-   [`delete /api/user/{user}`](#apiUserUserDelete)
-   [`get /api/user/{user}`](#apiUserUserGet)
-   [`put /api/user/{user}`](#apiUserUserPut)
-   [`get /api/wallet`](#apiWalletGet)
-   [`post /api/wallet`](#apiWalletPost)
-   [`get /api/wallet/{wallet}/connection/`](#apiWalletWalletConnectionGet)
-   [`get /api/wallet/{wallet}/connection/{theirDid}`](#apiWalletWalletConnectionTheirDidGet)
-   [`delete /api/wallet/{wallet}`](#apiWalletWalletDelete)
-   [`get /api/wallet/{wallet}`](#apiWalletWalletGet)

#### [Wallet](#Wallet)

-   [`get /api/wallet`](#apiWalletGet)
-   [`post /api/wallet`](#apiWalletPost)
-   [`get /api/wallet/{wallet}/connection/`](#apiWalletWalletConnectionGet)
-   [`get /api/wallet/{wallet}/connection/{theirDid}`](#apiWalletWalletConnectionTheirDidGet)
-   [`get /api/wallet/{wallet}/credential/{credential}`](#apiWalletWalletCredentialCredentialGet)
-   [`get /api/wallet/{wallet}/credential/`](#apiWalletWalletCredentialGet)
-   [`delete /api/wallet/{wallet}`](#apiWalletWalletDelete)
-   [`get /api/wallet/{wallet}`](#apiWalletWalletGet)

# <span id="Common">Common</span>

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

```delete
delete /api/connectionoffer/{connectionOfferId}
```

Delete a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

Delete a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdGet"></span>

```get
get /api/connectionoffer/{connectionOfferId}
```

Retrieve a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

Retrieve a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

```delete
delete /api/connectionrequest/{connectionRequestId}
```

Delete a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

Delete a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

```get
get /api/connectionrequest/{connectionRequestId}
```

Retrieve a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

Retrieve a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestGet"></span>

```get
get /api/connectionrequest
```

List all my connection requests (<span
class="nickname">apiConnectionrequestGet</span>)

List all my connection requests

### Request headers

### Return type

array\[[connection_request](#connection_request)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestPost"></span>

```post
post /api/connectionrequest
```

Accept a connection offer and/or send a connection request (<span
class="nickname">apiConnectionrequestPost</span>)

Accept a connection offer and/or send a connection request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionrequest_post](#connectionrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionresponsePost"></span>

```post
post /api/connectionresponse
```

Accept a connection request and send a connection response (<span
class="nickname">apiConnectionresponsePost</span>)

Accept a connection request and send a connection response

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionresponse_post](#connectionresponse_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_response](#connection_response)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_response](#connection_response)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiLoginPost"></span>

```post
post /api/login
```

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

Allow users to login, will return them a JWT valid for a specific amount
of time

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [login_post](#login_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

---

<span id="apiUserPost"></span>

```post
post /api/user
```

Register a new user (<span class="nickname">apiUserPost</span>)

Register a new user

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_post](#user_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

---

<span id="apiUserUserDelete"></span>

```delete
delete /api/user/{user}
```

Delete a User (<span class="nickname">apiUserUserDelete</span>)

Delete a User

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserGet"></span>

```get
get /api/user/{user}
```

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

Retrieve a user

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserPut"></span>

```put
put /api/user/{user}
```

Update a User (at least one of the properties must be provided) (<span
class="nickname">apiUserUserPut</span>)

Update a User (at least one of the properties must be provided)

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_put](#user_put) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletGet"></span>

```get
get /api/wallet
```

List all wallets of user (<span class="nickname">apiWalletGet</span>)

List all wallets of user

### Return type

array\[[wallet](#wallet)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletPost"></span>

```post
post /api/wallet
```

Create a new Wallet (optionally with given name and settings) (<span
class="nickname">apiWalletPost</span>)

Create a new Wallet (optionally with given name and settings)

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [wallet_post](#wallet_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionGet"></span>

```get
get /api/wallet/{wallet}/connection/
```

List connections/pairwises stored in wallet (<span
class="nickname">apiWalletWalletConnectionGet</span>)

List connections/pairwises stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

array\[[pairwise](#pairwise)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionTheirDidGet"></span>

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

Retrieve connection/pairwise stored in wallet (<span
class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

Retrieve connection/pairwise stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

theirDid (required)

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

### Return type

[pairwise](#pairwise)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletDelete"></span>

```delete
delete /api/wallet/{wallet}
```

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

Delete a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletGet"></span>

```get
get /api/wallet/{wallet}
```

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

Retrieve a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Connection">Connection</span>

<span id="apiConnectionMyDidGet"></span>

```get
get /api/connection/{myDid}
```

Retrieve a (pending) connection (<span
class="nickname">apiConnectionMyDidGet</span>)

Retrieve a (pending) connection

### Path parameters

myDid (required)

<span class="param-type">Path Parameter</span> — A unique did used in a
pairwise

### Request headers

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

[Object](#Object)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

```delete
delete /api/connectionoffer/{connectionOfferId}
```

Delete a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

Delete a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdGet"></span>

```get
get /api/connectionoffer/{connectionOfferId}
```

Retrieve a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

Retrieve a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferGet"></span>

```get
get /api/connectionoffer
```

List all my connection offers (<span
class="nickname">apiConnectionofferGet</span>)

List all my connection offers

### Request headers

### Return type

array\[[connection_offer](#connection_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferPost"></span>

```post
post /api/connectionoffer
```

Create a new connection offer (<span
class="nickname">apiConnectionofferPost</span>)

Create a new connection offer

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionoffer_post](#connectionoffer_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [connection_offer](#connection_offer)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

```delete
delete /api/connectionrequest/{connectionRequestId}
```

Delete a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

Delete a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

```get
get /api/connectionrequest/{connectionRequestId}
```

Retrieve a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

Retrieve a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestGet"></span>

```get
get /api/connectionrequest
```

List all my connection requests (<span
class="nickname">apiConnectionrequestGet</span>)

List all my connection requests

### Request headers

### Return type

array\[[connection_request](#connection_request)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestPost"></span>

```post
post /api/connectionrequest
```

Accept a connection offer and/or send a connection request (<span
class="nickname">apiConnectionrequestPost</span>)

Accept a connection offer and/or send a connection request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionrequest_post](#connectionrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionresponsePost"></span>

```post
post /api/connectionresponse
```

Accept a connection request and send a connection response (<span
class="nickname">apiConnectionresponsePost</span>)

Accept a connection request and send a connection response

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionresponse_post](#connectionresponse_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_response](#connection_response)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_response](#connection_response)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Credential">Credential</span>

<span id="apiCredentialGet"></span>

```get
get /api/credential/
```

List credentials issued by a wallet (<span
class="nickname">apiCredentialGet</span>)

List credentials issued by a wallet

### Request headers

### Query parameters

recipientDid (optional)

<span class="param-type">Query Parameter</span> — (Optional)
recipientDid to filter by

### Return type

array\[[credential_message](#credential_message)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialIdGet"></span>

```get
get /api/credential/{id}
```

Retrieve a credential message issued/sent by a wallet (<span
class="nickname">apiCredentialIdGet</span>)

Retrieve a credential message issued/sent by a wallet

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

### Request headers

### Return type

[credential_message](#credential_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_message](#credential_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialIdRevokePost"></span>

```post
post /api/credential/{id}/revoke
```

Revoke a credential (<span
class="nickname">apiCredentialIdRevokePost</span>)

Revoke a credential

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [object](#object) (optional)

<span class="param-type">Body Parameter</span> —

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 204

Success - but no content [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialPost"></span>

```post
post /api/credential/
```

Issue/Create a credential and send to recipient (<span
class="nickname">apiCredentialPost</span>)

Issue/Create a credential and send to recipient

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credential_post](#credential_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[credential_message](#credential_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [credential_message](#credential_message)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialdefCreddefGet"></span>

```get
get /api/credentialdef/{creddef}
```

Retrieve a credential definition from the ledger (<span
class="nickname">apiCredentialdefCreddefGet</span>)

Retrieve a credential definition from the ledger

### Path parameters

creddef (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential definition.

### Request headers

### Return type

[indy_credential_definition](#indy_credential_definition)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential_definition](#indy_credential_definition)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialdefGet"></span>

```get
get /api/credentialdef
```

List credential definitions of wallet stored in DB (<span
class="nickname">apiCredentialdefGet</span>)

List credential definitions of wallet stored in DB

### Request headers

### Return type

array\[[credential_definition](#credential_definition)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialdefPost"></span>

```post
post /api/credentialdef
```

Create a credential definition (<span
class="nickname">apiCredentialdefPost</span>)

Create a credential definition

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credentialdef_post](#credentialdef_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferGet"></span>

```get
get /api/credentialoffer
```

List credential offers (<span
class="nickname">apiCredentialofferGet</span>)

List credential offers

### Request headers

### Return type

array\[[credential_offer](#credential_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferIdDelete"></span>

```delete
delete /api/credentialoffer/{id}
```

Delete a credential offer (<span
class="nickname">apiCredentialofferIdDelete</span>)

Delete a credential offer

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferIdGet"></span>

```get
get /api/credentialoffer/{id}
```

Retrieve a credential offer (<span
class="nickname">apiCredentialofferIdGet</span>)

Retrieve a credential offer

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

### Request headers

### Return type

array\[[credential_offer](#credential_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferPost"></span>

```post
post /api/credentialoffer
```

Create and send a credential offer (<span
class="nickname">apiCredentialofferPost</span>)

Create and send a credential offer

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credentialoffer_post](#credentialoffer_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[credential_offer](#credential_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [credential_offer](#credential_offer)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestGet"></span>

```get
get /api/credentialrequest
```

List credential requests (<span
class="nickname">apiCredentialrequestGet</span>)

List credential requests

### Request headers

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestIdDelete"></span>

```delete
delete /api/credentialrequest/{id}
```

Delete a credential request (<span
class="nickname">apiCredentialrequestIdDelete</span>)

Delete a credential request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestIdGet"></span>

```get
get /api/credentialrequest/{id}
```

Retrieve a credential request (<span
class="nickname">apiCredentialrequestIdGet</span>)

Retrieve a credential request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

### Request headers

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestPost"></span>

```post
post /api/credentialrequest
```

Accept credential offer and create credential request (<span
class="nickname">apiCredentialrequestPost</span>)

Accept credential offer and create credential request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credentialrequest_post](#credentialrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [credential_request](#credential_request)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Indyschema">Indyschema</span>

<span id="apiIndyschemaGet"></span>

```get
get /api/indyschema
```

List low-level indy schemas (<span
class="nickname">apiIndyschemaGet</span>)

List low-level indy schemas

### Request headers

### Return type

array\[[indy_schema_db](#indy_schema_db)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiIndyschemaPost"></span>

```post
post /api/indyschema
```

Create a low-level indy schema (<span
class="nickname">apiIndyschemaPost</span>)

Create a low-level indy schema

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [indyschema_post](#indyschema_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[indy_schema_db](#indy_schema_db)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [indy_schema_db](#indy_schema_db)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiIndyschemaSchemaidGet"></span>

```get
get /api/indyschema/{schemaid}
```

Retrieve a low-level indy schema (<span
class="nickname">apiIndyschemaSchemaidGet</span>)

Retrieve a low-level indy schema

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Request headers

### Return type

[indy_schema](#indy_schema)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_schema](#indy_schema)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Issuer">Issuer</span>

<span id="apiAttributeTypeGet"></span>

```get
get /api/attribute/type
```

The types supported by the high-level schema language (<span
class="nickname">apiAttributeTypeGet</span>)

The types supported by the high-level schema language

### Return type

array\[String\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

All the names of the supported types by the schema-compiler

---

<span id="apiConnectionMyDidGet"></span>

```get
get /api/connection/{myDid}
```

Retrieve a (pending) connection (<span
class="nickname">apiConnectionMyDidGet</span>)

Retrieve a (pending) connection

### Path parameters

myDid (required)

<span class="param-type">Path Parameter</span> — A unique did used in a
pairwise

### Request headers

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

[Object](#Object)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

```delete
delete /api/connectionoffer/{connectionOfferId}
```

Delete a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

Delete a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdGet"></span>

```get
get /api/connectionoffer/{connectionOfferId}
```

Retrieve a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

Retrieve a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferGet"></span>

```get
get /api/connectionoffer
```

List all my connection offers (<span
class="nickname">apiConnectionofferGet</span>)

List all my connection offers

### Request headers

### Return type

array\[[connection_offer](#connection_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferPost"></span>

```post
post /api/connectionoffer
```

Create a new connection offer (<span
class="nickname">apiConnectionofferPost</span>)

Create a new connection offer

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionoffer_post](#connectionoffer_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [connection_offer](#connection_offer)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

```delete
delete /api/connectionrequest/{connectionRequestId}
```

Delete a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

Delete a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

```get
get /api/connectionrequest/{connectionRequestId}
```

Retrieve a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

Retrieve a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestGet"></span>

```get
get /api/connectionrequest
```

List all my connection requests (<span
class="nickname">apiConnectionrequestGet</span>)

List all my connection requests

### Request headers

### Return type

array\[[connection_request](#connection_request)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestPost"></span>

```post
post /api/connectionrequest
```

Accept a connection offer and/or send a connection request (<span
class="nickname">apiConnectionrequestPost</span>)

Accept a connection offer and/or send a connection request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionrequest_post](#connectionrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionresponsePost"></span>

```post
post /api/connectionresponse
```

Accept a connection request and send a connection response (<span
class="nickname">apiConnectionresponsePost</span>)

Accept a connection request and send a connection response

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionresponse_post](#connectionresponse_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_response](#connection_response)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_response](#connection_response)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialGet"></span>

```get
get /api/credential/
```

List credentials issued by a wallet (<span
class="nickname">apiCredentialGet</span>)

List credentials issued by a wallet

### Request headers

### Query parameters

recipientDid (optional)

<span class="param-type">Query Parameter</span> — (Optional)
recipientDid to filter by

### Return type

array\[[credential_message](#credential_message)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialIdGet"></span>

```get
get /api/credential/{id}
```

Retrieve a credential message issued/sent by a wallet (<span
class="nickname">apiCredentialIdGet</span>)

Retrieve a credential message issued/sent by a wallet

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

### Request headers

### Return type

[credential_message](#credential_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_message](#credential_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialIdRevokePost"></span>

```post
post /api/credential/{id}/revoke
```

Revoke a credential (<span
class="nickname">apiCredentialIdRevokePost</span>)

Revoke a credential

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [object](#object) (optional)

<span class="param-type">Body Parameter</span> —

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 204

Success - but no content [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialPost"></span>

```post
post /api/credential/
```

Issue/Create a credential and send to recipient (<span
class="nickname">apiCredentialPost</span>)

Issue/Create a credential and send to recipient

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credential_post](#credential_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[credential_message](#credential_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [credential_message](#credential_message)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialdefCreddefGet"></span>

```get
get /api/credentialdef/{creddef}
```

Retrieve a credential definition from the ledger (<span
class="nickname">apiCredentialdefCreddefGet</span>)

Retrieve a credential definition from the ledger

### Path parameters

creddef (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential definition.

### Request headers

### Return type

[indy_credential_definition](#indy_credential_definition)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential_definition](#indy_credential_definition)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialdefGet"></span>

```get
get /api/credentialdef
```

List credential definitions of wallet stored in DB (<span
class="nickname">apiCredentialdefGet</span>)

List credential definitions of wallet stored in DB

### Request headers

### Return type

array\[[credential_definition](#credential_definition)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialdefPost"></span>

```post
post /api/credentialdef
```

Create a credential definition (<span
class="nickname">apiCredentialdefPost</span>)

Create a credential definition

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credentialdef_post](#credentialdef_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferGet"></span>

```get
get /api/credentialoffer
```

List credential offers (<span
class="nickname">apiCredentialofferGet</span>)

List credential offers

### Request headers

### Return type

array\[[credential_offer](#credential_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferIdDelete"></span>

```delete
delete /api/credentialoffer/{id}
```

Delete a credential offer (<span
class="nickname">apiCredentialofferIdDelete</span>)

Delete a credential offer

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferIdGet"></span>

```get
get /api/credentialoffer/{id}
```

Retrieve a credential offer (<span
class="nickname">apiCredentialofferIdGet</span>)

Retrieve a credential offer

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

### Request headers

### Return type

array\[[credential_offer](#credential_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferPost"></span>

```post
post /api/credentialoffer
```

Create and send a credential offer (<span
class="nickname">apiCredentialofferPost</span>)

Create and send a credential offer

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credentialoffer_post](#credentialoffer_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[credential_offer](#credential_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [credential_offer](#credential_offer)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestGet"></span>

```get
get /api/credentialrequest
```

List credential requests (<span
class="nickname">apiCredentialrequestGet</span>)

List credential requests

### Request headers

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestIdDelete"></span>

```delete
delete /api/credentialrequest/{id}
```

Delete a credential request (<span
class="nickname">apiCredentialrequestIdDelete</span>)

Delete a credential request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestIdGet"></span>

```get
get /api/credentialrequest/{id}
```

Retrieve a credential request (<span
class="nickname">apiCredentialrequestIdGet</span>)

Retrieve a credential request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

### Request headers

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestPost"></span>

```post
post /api/credentialrequest
```

Accept credential offer and create credential request (<span
class="nickname">apiCredentialrequestPost</span>)

Accept credential offer and create credential request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [credentialrequest_post](#credentialrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [credential_request](#credential_request)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiIndyschemaGet"></span>

```get
get /api/indyschema
```

List low-level indy schemas (<span
class="nickname">apiIndyschemaGet</span>)

List low-level indy schemas

### Request headers

### Return type

array\[[indy_schema_db](#indy_schema_db)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiIndyschemaPost"></span>

```post
post /api/indyschema
```

Create a low-level indy schema (<span
class="nickname">apiIndyschemaPost</span>)

Create a low-level indy schema

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [indyschema_post](#indyschema_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[indy_schema_db](#indy_schema_db)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [indy_schema_db](#indy_schema_db)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiIndyschemaSchemaidGet"></span>

```get
get /api/indyschema/{schemaid}
```

Retrieve a low-level indy schema (<span
class="nickname">apiIndyschemaSchemaidGet</span>)

Retrieve a low-level indy schema

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Request headers

### Return type

[indy_schema](#indy_schema)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_schema](#indy_schema)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiLoginPost"></span>

```post
post /api/login
```

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

Allow users to login, will return them a JWT valid for a specific amount
of time

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [login_post](#login_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

---

<span id="apiSchemaGet"></span>

```get
get /api/schema
```

List schemas (<span class="nickname">apiSchemaGet</span>)

List schemas from the logged in user

### Request headers

### Query parameters

onlyActive (optional)

<span class="param-type">Query Parameter</span> — (Optional) Flag to
filter all non-active schemas

### Return type

array\[Object\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

---

<span id="apiSchemaPost"></span>

```post
post /api/schema
```

Create a Schema (<span class="nickname">apiSchemaPost</span>)

Create a Schema, Credential Definition &amp; Revocation Registry (if
revocable) for the logged in user

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [schema_post](#schema_post) (optional)

<span class="param-type">Body Parameter</span> —

### Request headers

### Responses

#### 201

[](#)

#### 400

Schema does not pass the schema compiler/typechecker [](#)

#### 409

Schema with the same name and version already exists [](#)

---

<span id="apiSchemaSchemaidGet"></span>

```get
get /api/schema/{schemaid}
```

Retrieve a schema (<span class="nickname">apiSchemaSchemaidGet</span>)

Retrieve a schema

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Request headers

### Return type

[schema_details](#schema_details)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Schema Details [schema_details](#schema_details)

#### 404

Schema with that ID not found in database [](#)

---

<span id="apiSchemaSchemaidPatch"></span>

```patch
patch /api/schema/{schemaid}
```

Alter schema by the given operation (<span
class="nickname">apiSchemaSchemaidPatch</span>)

Alter schema by the given operation

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [object](#object) (optional)

<span class="param-type">Body Parameter</span> —

### Request headers

### Responses

#### 204

Successfully altered schema [](#)

#### 422

Schema does not support revocations, or is already revoked [](#)

---

<span id="apiUserPost"></span>

```post
post /api/user
```

Register a new user (<span class="nickname">apiUserPost</span>)

Register a new user

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_post](#user_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

---

<span id="apiUserUserDelete"></span>

```delete
delete /api/user/{user}
```

Delete a User (<span class="nickname">apiUserUserDelete</span>)

Delete a User

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserGet"></span>

```get
get /api/user/{user}
```

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

Retrieve a user

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserPut"></span>

```put
put /api/user/{user}
```

Update a User (at least one of the properties must be provided) (<span
class="nickname">apiUserUserPut</span>)

Update a User (at least one of the properties must be provided)

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_put](#user_put) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletGet"></span>

```get
get /api/wallet
```

List all wallets of user (<span class="nickname">apiWalletGet</span>)

List all wallets of user

### Return type

array\[[wallet](#wallet)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletPost"></span>

```post
post /api/wallet
```

Create a new Wallet (optionally with given name and settings) (<span
class="nickname">apiWalletPost</span>)

Create a new Wallet (optionally with given name and settings)

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [wallet_post](#wallet_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionGet"></span>

```get
get /api/wallet/{wallet}/connection/
```

List connections/pairwises stored in wallet (<span
class="nickname">apiWalletWalletConnectionGet</span>)

List connections/pairwises stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

array\[[pairwise](#pairwise)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionTheirDidGet"></span>

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

Retrieve connection/pairwise stored in wallet (<span
class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

Retrieve connection/pairwise stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

theirDid (required)

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

### Return type

[pairwise](#pairwise)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletDelete"></span>

```delete
delete /api/wallet/{wallet}
```

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

Delete a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletGet"></span>

```get
get /api/wallet/{wallet}
```

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

Retrieve a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="tailsRevocRegDefIdGet"></span>

```get
get /tails/{revocRegDefId}
```

Agent Revocation Tails Endpoint (<span
class="nickname">tailsRevocRegDefIdGet</span>)

Public immutable shared blob linked to given revocation registry
definition

### Path parameters

revocRegDefId (required)

<span class="param-type">Path Parameter</span> — unique id of revocation
registry

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Message">Message</span>

<span id="apiMessageGet"></span>

```get
get /api/message/
```

List messages (<span class="nickname">apiMessageGet</span>)

List messages

### Request headers

### Query parameters

type (optional)

<span class="param-type">Query Parameter</span> — (Optional) A single
message type to filter by

### Return type

array\[[message_db](#message_db)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiMessageMessageIdDelete"></span>

```delete
delete /api/message/{messageId}
```

Delete a message (<span
class="nickname">apiMessageMessageIdDelete</span>)

Delete a message

### Path parameters

messageId (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a message.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiMessageMessageIdGet"></span>

```get
get /api/message/{messageId}
```

Retrieve a message (<span
class="nickname">apiMessageMessageIdGet</span>)

Retrieve a message

### Path parameters

messageId (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a message.

### Request headers

### Return type

[message_db](#message_db)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [message_db](#message_db)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiMessagePost"></span>

```post
post /api/message/
```

Send message (<span class="nickname">apiMessagePost</span>)

Send message

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [message_post](#message_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [Object](#Object)

#### 202

Accepted [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="indyPost"></span>

```post
post /indy/
```

Agent Message Endpoint (<span class="nickname">indyPost</span>)

Agent Message Endpoint

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [indy_post](#indy_post) (optional)

<span class="param-type">Body Parameter</span> —

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 202

Accepted [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Proof">Proof</span>

<span id="apiProofGet"></span>

```get
get /api/proof
```

List received proofs (<span class="nickname">apiProofGet</span>)

List received proofs

### Request headers

### Return type

array\[[proof](#proof)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofIdDelete"></span>

```delete
delete /api/proof/{id}
```

Delete a received proof (<span class="nickname">apiProofIdDelete</span>)

Delete a received proof

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofIdGet"></span>

```get
get /api/proof/{id}
```

Retrieve a received proof (including whether it is valid) (<span
class="nickname">apiProofIdGet</span>)

Retrieve a received proof (including whether it is valid)

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

### Request headers

### Return type

[proof](#proof)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proof](#proof)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofPost"></span>

```post
post /api/proof
```

Create and send a Proof (<span class="nickname">apiProofPost</span>)

Create and send a Proof

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proof_post](#proof_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[proof_message](#proof_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [proof_message](#proof_message)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestGet"></span>

```get
get /api/proofrequest
```

List proof requests (<span class="nickname">apiProofrequestGet</span>)

List proof requests

### Request headers

### Return type

array\[[proofrequest_message](#proofrequest_message)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestIdDelete"></span>

```delete
delete /api/proofrequest/{id}
```

Delete a proof request (<span
class="nickname">apiProofrequestIdDelete</span>)

Delete a proof request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestIdGet"></span>

```get
get /api/proofrequest/{id}
```

Retrieve a proof request (<span
class="nickname">apiProofrequestIdGet</span>)

Retrieve a proof request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

### Request headers

### Return type

[proofrequest_message](#proofrequest_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_message](#proofrequest_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestPost"></span>

```post
post /api/proofrequest
```

Create and send a proof request (<span
class="nickname">apiProofrequestPost</span>)

Create and send a proof request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proofrequest_post](#proofrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[proofrequest_message](#proofrequest_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [proofrequest_message](#proofrequest_message)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateGet"></span>

```get
get /api/proofrequesttemplate
```

List proof request templates (<span
class="nickname">apiProofrequesttemplateGet</span>)

List proof request templates

### Request headers

### Return type

array\[[proofrequest_template](#proofrequest_template)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateIdDelete"></span>

```delete
delete /api/proofrequesttemplate/{id}
```

Delete a proof request template (<span
class="nickname">apiProofrequesttemplateIdDelete</span>)

Delete a proof request template

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateIdGet"></span>

```get
get /api/proofrequesttemplate/{id}
```

Retrieve a proof request template (<span
class="nickname">apiProofrequesttemplateIdGet</span>)

Retrieve a proof request template

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

### Request headers

### Return type

[proofrequest_template](#proofrequest_template)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_template](#proofrequest_template)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateIdPut"></span>

```put
put /api/proofrequesttemplate/{id}
```

Update a proof request template (<span
class="nickname">apiProofrequesttemplateIdPut</span>)

Update a proof request template

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proofrequest_template_put](#proofrequest_template_put)
(optional)

<span class="param-type">Body Parameter</span> —

### Request headers

### Responses

#### 200

[](#)

#### 404

Proof request template Id not found [](#)

---

<span id="apiProofrequesttemplatePost"></span>

```post
post /api/proofrequesttemplate
```

Create a proof request templates (<span
class="nickname">apiProofrequesttemplatePost</span>)

Create a proof request templates

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proofrequest_template_post](#proofrequest_template_post)
(optional)

<span class="param-type">Body Parameter</span> —

### Return type

[proofrequest_template](#proofrequest_template)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [proofrequest_template](#proofrequest_template)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="tailsRevocRegDefIdGet"></span>

```get
get /tails/{revocRegDefId}
```

Agent Revocation Tails Endpoint (<span
class="nickname">tailsRevocRegDefIdGet</span>)

Public immutable shared blob linked to given revocation registry
definition

### Path parameters

revocRegDefId (required)

<span class="param-type">Path Parameter</span> — unique id of revocation
registry

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Prover">Prover</span>

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

```delete
delete /api/connectionoffer/{connectionOfferId}
```

Delete a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

Delete a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdGet"></span>

```get
get /api/connectionoffer/{connectionOfferId}
```

Retrieve a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

Retrieve a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

```delete
delete /api/connectionrequest/{connectionRequestId}
```

Delete a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

Delete a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

```get
get /api/connectionrequest/{connectionRequestId}
```

Retrieve a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

Retrieve a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestGet"></span>

```get
get /api/connectionrequest
```

List all my connection requests (<span
class="nickname">apiConnectionrequestGet</span>)

List all my connection requests

### Request headers

### Return type

array\[[connection_request](#connection_request)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestPost"></span>

```post
post /api/connectionrequest
```

Accept a connection offer and/or send a connection request (<span
class="nickname">apiConnectionrequestPost</span>)

Accept a connection offer and/or send a connection request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionrequest_post](#connectionrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionresponsePost"></span>

```post
post /api/connectionresponse
```

Accept a connection request and send a connection response (<span
class="nickname">apiConnectionresponsePost</span>)

Accept a connection request and send a connection response

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionresponse_post](#connectionresponse_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_response](#connection_response)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_response](#connection_response)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferGet"></span>

```get
get /api/credentialoffer
```

List credential offers (<span
class="nickname">apiCredentialofferGet</span>)

List credential offers

### Request headers

### Return type

array\[[credential_offer](#credential_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferIdDelete"></span>

```delete
delete /api/credentialoffer/{id}
```

Delete a credential offer (<span
class="nickname">apiCredentialofferIdDelete</span>)

Delete a credential offer

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialofferIdGet"></span>

```get
get /api/credentialoffer/{id}
```

Retrieve a credential offer (<span
class="nickname">apiCredentialofferIdGet</span>)

Retrieve a credential offer

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

### Request headers

### Return type

array\[[credential_offer](#credential_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestGet"></span>

```get
get /api/credentialrequest
```

List credential requests (<span
class="nickname">apiCredentialrequestGet</span>)

List credential requests

### Request headers

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestIdDelete"></span>

```delete
delete /api/credentialrequest/{id}
```

Delete a credential request (<span
class="nickname">apiCredentialrequestIdDelete</span>)

Delete a credential request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiCredentialrequestIdGet"></span>

```get
get /api/credentialrequest/{id}
```

Retrieve a credential request (<span
class="nickname">apiCredentialrequestIdGet</span>)

Retrieve a credential request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

### Request headers

### Return type

[credential_request](#credential_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiLoginPost"></span>

```post
post /api/login
```

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

Allow users to login, will return them a JWT valid for a specific amount
of time

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [login_post](#login_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

---

<span id="apiProofPost"></span>

```post
post /api/proof
```

Create and send a Proof (<span class="nickname">apiProofPost</span>)

Create and send a Proof

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proof_post](#proof_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[proof_message](#proof_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [proof_message](#proof_message)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestGet"></span>

```get
get /api/proofrequest
```

List proof requests (<span class="nickname">apiProofrequestGet</span>)

List proof requests

### Request headers

### Return type

array\[[proofrequest_message](#proofrequest_message)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestIdDelete"></span>

```delete
delete /api/proofrequest/{id}
```

Delete a proof request (<span
class="nickname">apiProofrequestIdDelete</span>)

Delete a proof request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestIdGet"></span>

```get
get /api/proofrequest/{id}
```

Retrieve a proof request (<span
class="nickname">apiProofrequestIdGet</span>)

Retrieve a proof request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

### Request headers

### Return type

[proofrequest_message](#proofrequest_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_message](#proofrequest_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserPost"></span>

```post
post /api/user
```

Register a new user (<span class="nickname">apiUserPost</span>)

Register a new user

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_post](#user_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

---

<span id="apiUserUserDelete"></span>

```delete
delete /api/user/{user}
```

Delete a User (<span class="nickname">apiUserUserDelete</span>)

Delete a User

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserGet"></span>

```get
get /api/user/{user}
```

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

Retrieve a user

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserPut"></span>

```put
put /api/user/{user}
```

Update a User (at least one of the properties must be provided) (<span
class="nickname">apiUserUserPut</span>)

Update a User (at least one of the properties must be provided)

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_put](#user_put) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletGet"></span>

```get
get /api/wallet
```

List all wallets of user (<span class="nickname">apiWalletGet</span>)

List all wallets of user

### Return type

array\[[wallet](#wallet)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletPost"></span>

```post
post /api/wallet
```

Create a new Wallet (optionally with given name and settings) (<span
class="nickname">apiWalletPost</span>)

Create a new Wallet (optionally with given name and settings)

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [wallet_post](#wallet_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionGet"></span>

```get
get /api/wallet/{wallet}/connection/
```

List connections/pairwises stored in wallet (<span
class="nickname">apiWalletWalletConnectionGet</span>)

List connections/pairwises stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

array\[[pairwise](#pairwise)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionTheirDidGet"></span>

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

Retrieve connection/pairwise stored in wallet (<span
class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

Retrieve connection/pairwise stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

theirDid (required)

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

### Return type

[pairwise](#pairwise)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletCredentialCredentialGet"></span>

```get
get /api/wallet/{wallet}/credential/{credential}
```

Retrieve credential stored in wallet (<span
class="nickname">apiWalletWalletCredentialCredentialGet</span>)

Retrieve credential stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

credential (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a credential

### Return type

[indy_credential](#indy_credential)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential](#indy_credential)

---

<span id="apiWalletWalletCredentialGet"></span>

```get
get /api/wallet/{wallet}/credential/
```

List credentials stored in wallet (<span
class="nickname">apiWalletWalletCredentialGet</span>)

List credentials stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Query parameters

schema_id (optional)

<span class="param-type">Query Parameter</span> — (Optional) schema_id
to filter credentials

schema_issuer_did (optional)

<span class="param-type">Query Parameter</span> — (Optional)
schema_issuer_did to filter credentials

schema_name (optional)

<span class="param-type">Query Parameter</span> — (Optional)
schema_name to filter credentials

schema_version (optional)

<span class="param-type">Query Parameter</span> — (Optional)
schema_version to filter credentials

issuer_did (optional)

<span class="param-type">Query Parameter</span> — (Optional) issuer_did
to filter credentials

cred_def_id (optional)

<span class="param-type">Query Parameter</span> — (Optional)
cred_def_id to filter credentials

### Return type

array\[[indy_credential](#indy_credential)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletDelete"></span>

```delete
delete /api/wallet/{wallet}
```

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

Delete a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletGet"></span>

```get
get /api/wallet/{wallet}
```

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

Retrieve a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="tailsRevocRegDefIdGet"></span>

```get
get /tails/{revocRegDefId}
```

Agent Revocation Tails Endpoint (<span
class="nickname">tailsRevocRegDefIdGet</span>)

Public immutable shared blob linked to given revocation registry
definition

### Path parameters

revocRegDefId (required)

<span class="param-type">Path Parameter</span> — unique id of revocation
registry

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Schema">Schema</span>

<span id="apiAttributeTypeGet"></span>

```get
get /api/attribute/type
```

The types supported by the high-level schema language (<span
class="nickname">apiAttributeTypeGet</span>)

The types supported by the high-level schema language

### Return type

array\[String\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

All the names of the supported types by the schema-compiler

---

<span id="apiSchemaGet"></span>

```get
get /api/schema
```

List schemas (<span class="nickname">apiSchemaGet</span>)

List schemas from the logged in user

### Request headers

### Query parameters

onlyActive (optional)

<span class="param-type">Query Parameter</span> — (Optional) Flag to
filter all non-active schemas

### Return type

array\[Object\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

---

<span id="apiSchemaPost"></span>

```post
post /api/schema
```

Create a Schema (<span class="nickname">apiSchemaPost</span>)

Create a Schema, Credential Definition &amp; Revocation Registry (if
revocable) for the logged in user

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [schema_post](#schema_post) (optional)

<span class="param-type">Body Parameter</span> —

### Request headers

### Responses

#### 201

[](#)

#### 400

Schema does not pass the schema compiler/typechecker [](#)

#### 409

Schema with the same name and version already exists [](#)

---

<span id="apiSchemaSchemaidGet"></span>

```get
get /api/schema/{schemaid}
```

Retrieve a schema (<span class="nickname">apiSchemaSchemaidGet</span>)

Retrieve a schema

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Request headers

### Return type

[schema_details](#schema_details)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Schema Details [schema_details](#schema_details)

#### 404

Schema with that ID not found in database [](#)

---

<span id="apiSchemaSchemaidPatch"></span>

```patch
patch /api/schema/{schemaid}
```

Alter schema by the given operation (<span
class="nickname">apiSchemaSchemaidPatch</span>)

Alter schema by the given operation

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [object](#object) (optional)

<span class="param-type">Body Parameter</span> —

### Request headers

### Responses

#### 204

Successfully altered schema [](#)

#### 422

Schema does not support revocations, or is already revoked [](#)

---

# <span id="Transaction">Transaction</span>

<span id="apiNymDidGet"></span>

```get
get /api/nym/{did}
```

Retrieve Nym from ledger (<span class="nickname">apiNymDidGet</span>)

Retrieve Nym from ledger

### Path parameters

did (required)

<span class="param-type">Path Parameter</span> — Did of NYM record to
retrieve

### Request headers

### Return type

[indy_nym](#indy_nym)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_nym](#indy_nym)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiNymPost"></span>

```post
post /api/nym
```

Send Nym request to the ledger (<span
class="nickname">apiNymPost</span>)

Send Nym request to the ledger

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [nym_post](#nym_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[indy_nym_result](#indy_nym_result)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_nym_result](#indy_nym_result)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiTransactionsGet"></span>

```get
get /api/transactions
```

(<span class="nickname">apiTransactionsGet</span>)

Get ledger transactions from-to indexes

### Request headers

### Query parameters

from (required)

<span class="param-type">Query Parameter</span> — Sequence Number of
first transaction to query (greater than 0)

to (required)

<span class="param-type">Query Parameter</span> — Sequence Number of
last transaction to query (greater than from index)

type (optional)

<span class="param-type">Query Parameter</span> — Ledger Type: pool,
domain, config. By default is DOMAIN

### Return type

array\[[indy_transaction](#indy_transaction)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Returns list of transactions

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

# <span id="User">User</span>

<span id="apiLoginPost"></span>

```post
post /api/login
```

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

Allow users to login, will return them a JWT valid for a specific amount
of time

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [login_post](#login_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

---

<span id="apiUserPost"></span>

```post
post /api/user
```

Register a new user (<span class="nickname">apiUserPost</span>)

Register a new user

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_post](#user_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

---

<span id="apiUserUserDelete"></span>

```delete
delete /api/user/{user}
```

Delete a User (<span class="nickname">apiUserUserDelete</span>)

Delete a User

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserGet"></span>

```get
get /api/user/{user}
```

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

Retrieve a user

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserPut"></span>

```put
put /api/user/{user}
```

Update a User (at least one of the properties must be provided) (<span
class="nickname">apiUserUserPut</span>)

Update a User (at least one of the properties must be provided)

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_put](#user_put) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Verifier">Verifier</span>

<span id="apiConnectionMyDidGet"></span>

```get
get /api/connection/{myDid}
```

Retrieve a (pending) connection (<span
class="nickname">apiConnectionMyDidGet</span>)

Retrieve a (pending) connection

### Path parameters

myDid (required)

<span class="param-type">Path Parameter</span> — A unique did used in a
pairwise

### Request headers

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

[Object](#Object)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

```delete
delete /api/connectionoffer/{connectionOfferId}
```

Delete a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

Delete a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferConnectionOfferIdGet"></span>

```get
get /api/connectionoffer/{connectionOfferId}
```

Retrieve a connection offer by \_id (<span
class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

Retrieve a connection offer by \_id

### Path parameters

connectionOfferId (required)

<span class="param-type">Path Parameter</span> — connection offer \_id

### Request headers

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferGet"></span>

```get
get /api/connectionoffer
```

List all my connection offers (<span
class="nickname">apiConnectionofferGet</span>)

List all my connection offers

### Request headers

### Return type

array\[[connection_offer](#connection_offer)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionofferPost"></span>

```post
post /api/connectionoffer
```

Create a new connection offer (<span
class="nickname">apiConnectionofferPost</span>)

Create a new connection offer

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionoffer_post](#connectionoffer_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_offer](#connection_offer)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [connection_offer](#connection_offer)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

```delete
delete /api/connectionrequest/{connectionRequestId}
```

Delete a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

Delete a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

```get
get /api/connectionrequest/{connectionRequestId}
```

Retrieve a connection request by \_id (<span
class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

Retrieve a connection request by \_id

### Path parameters

connectionRequestId (required)

<span class="param-type">Path Parameter</span> — connection request \_id

### Request headers

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestGet"></span>

```get
get /api/connectionrequest
```

List all my connection requests (<span
class="nickname">apiConnectionrequestGet</span>)

List all my connection requests

### Request headers

### Return type

array\[[connection_request](#connection_request)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionrequestPost"></span>

```post
post /api/connectionrequest
```

Accept a connection offer and/or send a connection request (<span
class="nickname">apiConnectionrequestPost</span>)

Accept a connection offer and/or send a connection request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionrequest_post](#connectionrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_request](#connection_request)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiConnectionresponsePost"></span>

```post
post /api/connectionresponse
```

Accept a connection request and send a connection response (<span
class="nickname">apiConnectionresponsePost</span>)

Accept a connection request and send a connection response

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [connectionresponse_post](#connectionresponse_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[connection_response](#connection_response)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_response](#connection_response)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiIndyschemaSchemaidGet"></span>

```get
get /api/indyschema/{schemaid}
```

Retrieve a low-level indy schema (<span
class="nickname">apiIndyschemaSchemaidGet</span>)

Retrieve a low-level indy schema

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Request headers

### Return type

[indy_schema](#indy_schema)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_schema](#indy_schema)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiLoginPost"></span>

```post
post /api/login
```

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

Allow users to login, will return them a JWT valid for a specific amount
of time

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [login_post](#login_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

---

<span id="apiProofGet"></span>

```get
get /api/proof
```

List received proofs (<span class="nickname">apiProofGet</span>)

List received proofs

### Request headers

### Return type

array\[[proof](#proof)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofIdDelete"></span>

```delete
delete /api/proof/{id}
```

Delete a received proof (<span class="nickname">apiProofIdDelete</span>)

Delete a received proof

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofIdGet"></span>

```get
get /api/proof/{id}
```

Retrieve a received proof (including whether it is valid) (<span
class="nickname">apiProofIdGet</span>)

Retrieve a received proof (including whether it is valid)

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

### Request headers

### Return type

[proof](#proof)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proof](#proof)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestGet"></span>

```get
get /api/proofrequest
```

List proof requests (<span class="nickname">apiProofrequestGet</span>)

List proof requests

### Request headers

### Return type

array\[[proofrequest_message](#proofrequest_message)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestIdDelete"></span>

```delete
delete /api/proofrequest/{id}
```

Delete a proof request (<span
class="nickname">apiProofrequestIdDelete</span>)

Delete a proof request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestIdGet"></span>

```get
get /api/proofrequest/{id}
```

Retrieve a proof request (<span
class="nickname">apiProofrequestIdGet</span>)

Retrieve a proof request

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

### Request headers

### Return type

[proofrequest_message](#proofrequest_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_message](#proofrequest_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequestPost"></span>

```post
post /api/proofrequest
```

Create and send a proof request (<span
class="nickname">apiProofrequestPost</span>)

Create and send a proof request

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proofrequest_post](#proofrequest_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[proofrequest_message](#proofrequest_message)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [proofrequest_message](#proofrequest_message)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateGet"></span>

```get
get /api/proofrequesttemplate
```

List proof request templates (<span
class="nickname">apiProofrequesttemplateGet</span>)

List proof request templates

### Request headers

### Return type

array\[[proofrequest_template](#proofrequest_template)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateIdDelete"></span>

```delete
delete /api/proofrequesttemplate/{id}
```

Delete a proof request template (<span
class="nickname">apiProofrequesttemplateIdDelete</span>)

Delete a proof request template

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

### Request headers

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateIdGet"></span>

```get
get /api/proofrequesttemplate/{id}
```

Retrieve a proof request template (<span
class="nickname">apiProofrequesttemplateIdGet</span>)

Retrieve a proof request template

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

### Request headers

### Return type

[proofrequest_template](#proofrequest_template)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_template](#proofrequest_template)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiProofrequesttemplateIdPut"></span>

```put
put /api/proofrequesttemplate/{id}
```

Update a proof request template (<span
class="nickname">apiProofrequesttemplateIdPut</span>)

Update a proof request template

### Path parameters

id (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proofrequest_template_put](#proofrequest_template_put)
(optional)

<span class="param-type">Body Parameter</span> —

### Request headers

### Responses

#### 200

[](#)

#### 404

Proof request template Id not found [](#)

---

<span id="apiProofrequesttemplatePost"></span>

```post
post /api/proofrequesttemplate
```

Create a proof request templates (<span
class="nickname">apiProofrequesttemplatePost</span>)

Create a proof request templates

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [proofrequest_template_post](#proofrequest_template_post)
(optional)

<span class="param-type">Body Parameter</span> —

### Return type

[proofrequest_template](#proofrequest_template)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [proofrequest_template](#proofrequest_template)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiSchemaSchemaidGet"></span>

```get
get /api/schema/{schemaid}
```

Retrieve a schema (<span class="nickname">apiSchemaSchemaidGet</span>)

Retrieve a schema

### Path parameters

schemaid (required)

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

### Request headers

### Return type

[schema_details](#schema_details)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Schema Details [schema_details](#schema_details)

#### 404

Schema with that ID not found in database [](#)

---

<span id="apiUserPost"></span>

```post
post /api/user
```

Register a new user (<span class="nickname">apiUserPost</span>)

Register a new user

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_post](#user_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

Object

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

---

<span id="apiUserUserDelete"></span>

```delete
delete /api/user/{user}
```

Delete a User (<span class="nickname">apiUserUserDelete</span>)

Delete a User

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserGet"></span>

```get
get /api/user/{user}
```

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

Retrieve a user

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiUserUserPut"></span>

```put
put /api/user/{user}
```

Update a User (at least one of the properties must be provided) (<span
class="nickname">apiUserUserPut</span>)

Update a User (at least one of the properties must be provided)

### Path parameters

user (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. &quot;me&quot; may be used as shorthand for the
current user.

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [user_put](#user_put) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[user](#user)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [user](#user)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletGet"></span>

```get
get /api/wallet
```

List all wallets of user (<span class="nickname">apiWalletGet</span>)

List all wallets of user

### Return type

array\[[wallet](#wallet)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletPost"></span>

```post
post /api/wallet
```

Create a new Wallet (optionally with given name and settings) (<span
class="nickname">apiWalletPost</span>)

Create a new Wallet (optionally with given name and settings)

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [wallet_post](#wallet_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionGet"></span>

```get
get /api/wallet/{wallet}/connection/
```

List connections/pairwises stored in wallet (<span
class="nickname">apiWalletWalletConnectionGet</span>)

List connections/pairwises stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

array\[[pairwise](#pairwise)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionTheirDidGet"></span>

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

Retrieve connection/pairwise stored in wallet (<span
class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

Retrieve connection/pairwise stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

theirDid (required)

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

### Return type

[pairwise](#pairwise)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletDelete"></span>

```delete
delete /api/wallet/{wallet}
```

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

Delete a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletGet"></span>

```get
get /api/wallet/{wallet}
```

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

Retrieve a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

# <span id="Wallet">Wallet</span>

<span id="apiWalletGet"></span>

```get
get /api/wallet
```

List all wallets of user (<span class="nickname">apiWalletGet</span>)

List all wallets of user

### Return type

array\[[wallet](#wallet)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletPost"></span>

```post
post /api/wallet
```

Create a new Wallet (optionally with given name and settings) (<span
class="nickname">apiWalletPost</span>)

Create a new Wallet (optionally with given name and settings)

### Consumes

This API call consumes the following media types via the <span
class="header">Content-Type</span> request header:

-   `application/json`

### Request body

body [wallet_post](#wallet_post) (optional)

<span class="param-type">Body Parameter</span> —

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

Created [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionGet"></span>

```get
get /api/wallet/{wallet}/connection/
```

List connections/pairwises stored in wallet (<span
class="nickname">apiWalletWalletConnectionGet</span>)

List connections/pairwises stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

array\[[pairwise](#pairwise)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletConnectionTheirDidGet"></span>

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

Retrieve connection/pairwise stored in wallet (<span
class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

Retrieve connection/pairwise stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

theirDid (required)

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

### Return type

[pairwise](#pairwise)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletCredentialCredentialGet"></span>

```get
get /api/wallet/{wallet}/credential/{credential}
```

Retrieve credential stored in wallet (<span
class="nickname">apiWalletWalletCredentialCredentialGet</span>)

Retrieve credential stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

credential (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a credential

### Return type

[indy_credential](#indy_credential)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential](#indy_credential)

---

<span id="apiWalletWalletCredentialGet"></span>

```get
get /api/wallet/{wallet}/credential/
```

List credentials stored in wallet (<span
class="nickname">apiWalletWalletCredentialGet</span>)

List credentials stored in wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Query parameters

schema_id (optional)

<span class="param-type">Query Parameter</span> — (Optional) schema_id
to filter credentials

schema_issuer_did (optional)

<span class="param-type">Query Parameter</span> — (Optional)
schema_issuer_did to filter credentials

schema_name (optional)

<span class="param-type">Query Parameter</span> — (Optional)
schema_name to filter credentials

schema_version (optional)

<span class="param-type">Query Parameter</span> — (Optional)
schema_version to filter credentials

issuer_did (optional)

<span class="param-type">Query Parameter</span> — (Optional) issuer_did
to filter credentials

cred_def_id (optional)

<span class="param-type">Query Parameter</span> — (Optional)
cred_def_id to filter credentials

### Return type

array\[[indy_credential](#indy_credential)\]

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletDelete"></span>

```delete
delete /api/wallet/{wallet}
```

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

Delete a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

<span id="apiWalletWalletGet"></span>

```get
get /api/wallet/{wallet}
```

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

Retrieve a Wallet

### Path parameters

wallet (required)

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. &quot;default&quot; may be used as shorthand for
the current user's default wallet.

### Return type

[wallet](#wallet)

### Produces

This API call produces the following media types according to the <span
class="header">Accept</span> request header; the media type will be
conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [wallet](#wallet)

#### 400

Bad Request [error_message](#error_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

---

## <span id="__Models">Models</span>

\[ Jump to [Methods](#__Methods) \]

### Table of Contents

1.  [`connection_offer`](#connection_offer)
2.  [`connection_request`](#connection_request)
3.  [`connection_response`](#connection_response)
4.  [`connectionoffer_post`](#connectionoffer_post)
5.  [`connectionrequest_post`](#connectionrequest_post)
6.  [`connectionresponse_post`](#connectionresponse_post)
7.  [`createdAt`](#createdAt)
8.  [`credential_definition`](#credential_definition)
9.  [`credential_message`](#credential_message)
10. [`credential_offer`](#credential_offer)
11. [`credential_post`](#credential_post)
12. [`credential_request`](#credential_request)
13. [`credentialdef_post`](#credentialdef_post)
14. [`credentialoffer_post`](#credentialoffer_post)
15. [`credentialrequest_post`](#credentialrequest_post)
16. [`error_message`](#error_message)
17. [`expireAt`](#expireAt)
18. [`id`](#id)
19. [`indy_credential`](#indy_credential)
20. [`indy_credential_definition`](#indy_credential_definition)
21. [`indy_nym`](#indy_nym)
22. [`indy_nym_result`](#indy_nym_result)
23. [`indy_post`](#indy_post)
24. [`indy_schema`](#indy_schema)
25. [`indy_schema_db`](#indy_schema_db)
26. [`indy_transaction`](#indy_transaction)
27. [`indyschema_post`](#indyschema_post)
28. [`login_post`](#login_post)
29. [`messageId`](#messageId)
30. [`messageType`](#messageType)
31. [`message_db`](#message_db)
32. [`message_post`](#message_post)
33. [`nym_post`](#nym_post)
34. [`pairwise`](#pairwise)
35. [`proof`](#proof)
36. [`proof_message`](#proof_message)
37. [`proof_post`](#proof_post)
38. [`proofrequest_message`](#proofrequest_message)
39. [`proofrequest_post`](#proofrequest_post)
40. [`proofrequest_template`](#proofrequest_template)
41. [`proofrequest_template_post`](#proofrequest_template_post)
42. [`proofrequest_template_put`](#proofrequest_template_put)
43. [`recipientDid`](#recipientDid)
44. [`schema_details`](#schema_details)
45. [`schema_post`](#schema_post)
46. [`senderDid`](#senderDid)
47. [`updatedAt`](#updatedAt)
48. [`user`](#user)
49. [`user_post`](#user_post)
50. [`user_put`](#user_put)
51. [`wallet`](#wallet)
52. [`walletId`](#walletId)
53. [`wallet_post`](#wallet_post)

### <span id="connection_offer">`connection_offer`</span>

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/connection_offer

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span
class="param-type">[\#/message_formats/connection_offer](##/message_formats/connection_offer)</span>

meta (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata

### <span id="connection_request">`connection_request`</span>

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/connection_request

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span
class="param-type">[\#/message_formats/connection_request](##/message_formats/connection_request)</span>

meta (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata

### <span id="connection_response">`connection_response`</span>

### <span id="connectionoffer_post">`connectionoffer_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

endpoint (optional)

<span class="param-type">[String](#string)</span> (Optional) Response
endpoint for connection response - my endpoint

role (optional)

<span class="param-type">[String](#string)</span> (Optional) Role
offered to the connection invitee

Enum:

NONE

TRUSTEE

STEWARD

TRUST_ANCHOR

meta (optional)

<span class="param-type">[Object](#object)</span> (Optional) Additional
data to store in the offer (and later in the pairwise), e.g. citizen id
but not send with the offer

data (optional)

<span class="param-type">[Object](#object)</span> (Optional) Additional
data like name, logo, description, to send with the connection offer

### <span id="connectionrequest_post">`connectionrequest_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

endpoint (optional)

<span class="param-type">[String](#string)</span> (Optional) Response
endpoint for connection response - my endpoint

theirDid (optional)

<span class="param-type">[String](#string)</span> (Optional) Their
(endpoint) did, required if there is no connection offer

theirVk (optional)

<span class="param-type">[String](#string)</span> (Optional) Their
(endpoint) did verification key, required if there is no connection
offer or verkey not on ledger.

theirEndpoint (optional)

<span class="param-type">[String](#string)</span> (Optional) Their
endpoint address, required if no there is no connection offer or address
not on ledger.

connectionOffer (optional)

<span class="param-type">[Object](#object)</span> (Optional) A
connection offer object

### <span id="connectionresponse_post">`connectionresponse_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

connectionRequestId

<span class="param-type">[String](#string)</span> A unique string value
identifying the connection request to respond to

### <span id="createdAt">`createdAt`</span>

Creation Time

### <span id="credential_definition">`credential_definition`</span>

created (optional)

<span class="param-type">[createdAt](#createdAt)</span>

credDefId (optional)

<span class="param-type">[String](#string)</span> Credential Definition
Id

revocRegId (optional)

<span class="param-type">[String](#string)</span> (Optional) Revocation
Registry Id

revocRegType (optional)

<span class="param-type">[String](#string)</span> (Optional) Revocation
Registry Type

wallet (optional)

<span class="param-type">[String](#string)</span> Owner Wallet id

data (optional)

<span
class="param-type">[indy_credential_definition](#indy_credential_definition)</span>

### <span id="credential_message">`credential_message`</span>

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/credential

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span
class="param-type">[\#/message_formats/credential](##/message_formats/credential)</span>

meta (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata

### <span id="credential_offer">`credential_offer`</span>

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/credential_offer

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span
class="param-type">[\#/message_formats/credential_offer](##/message_formats/credential_offer)</span>

meta (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata

### <span id="credential_post">`credential_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

credentialRequestId

<span class="param-type">[String](#string)</span> Credential Request
\_id as stored in API

values

<span class="param-type">[Object](#object)</span> Object containing
attributes defined in schema as key-value pairs (e.g.
{&quot;attrName&quot;:&quot;attrValue&quot;,
&quot;attrName1&quot;:&quot;attrValue1&quot;})

### <span id="credential_request">`credential_request`</span>

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/credential_request

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span
class="param-type">[\#/message_formats/credential_request](##/message_formats/credential_request)</span>

meta (optional)

<span class="param-type">[Object](#object)</span> Credential request
metadata JSON as created by indy-sdk

### <span id="credentialdef_post">`credentialdef_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

schemaId

<span class="param-type">[String](#string)</span> A unique string value
identifying a schema

tag (optional)

<span class="param-type">[String](#string)</span> A string value
identifying credential definition uniquely within given schema

supportRevocation (optional)

<span class="param-type">[Boolean](#boolean)</span> (Optional) States if
revocation should be supported for this credential definiton

### <span id="credentialoffer_post">`credentialoffer_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

recipientDid

<span class="param-type">[String](#string)</span> DID for whom to create
a credential offer

credDefId

<span class="param-type">[String](#string)</span> Credential definition
id

credentialLocation (optional)

<span class="param-type">[String](#string)</span> (Optional) URL at
which key-value object containing credential values can be fetched using
HTTP GET

### <span id="credentialrequest_post">`credentialrequest_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

credentialOfferId

<span class="param-type">[String](#string)</span> credentialoffer \_id
as stored in API

### <span id="error_message">`error_message`</span>

message (optional)

<span class="param-type">[String](#string)</span> Informational Message

### <span id="expireAt">`expireAt`</span>

Optional expire time

### <span id="id">`id`</span>

A uniquely identifying string value

### <span id="indy_credential">`indy_credential`</span>

Credential as created by indy-sdk, fields may vary

referent (optional)

<span class="param-type">[String](#string)</span> Credential Id as
stored in wallet

schema_id (optional)

<span class="param-type">[String](#string)</span> Schema Id

cred_def_id (optional)

<span class="param-type">[String](#string)</span> Credential Definition
Id

rev_reg_def_id (optional)

<span class="param-type">[String](#string)</span> (Optional) Revocation
Registry Definition Id, if revocable

values (optional)

<span class="param-type">[Object](#object)</span> Credential Values

signature (optional)

<span class="param-type">[String](#string)</span> Signature

signature_correctness_proof (optional)

<span class="param-type">[String](#string)</span> Signature Correctness
Proof

### <span id="indy_credential_definition">`indy_credential_definition`</span>

id (optional)

<span class="param-type">[id](#id)</span>

schemaId (optional)

<span class="param-type">[String](#string)</span> Schema Id

type (optional)

<span class="param-type">[String](#string)</span> Credential Definition
Type

tag (optional)

<span class="param-type">[String](#string)</span> Credential Definition
Tag

value (optional)

<span class="param-type">[Object](#object)</span>

ver (optional)

<span class="param-type">[String](#string)</span> Credential Definition
Version

### <span id="indy_nym">`indy_nym`</span>

Indy NYM transaction

### <span id="indy_nym_result">`indy_nym_result`</span>

Indy NYM Result

### <span id="indy_post">`indy_post`</span>

message

<span class="param-type">[String](#string)</span> Anoncrypted-message

### <span id="indy_schema">`indy_schema`</span>

Schema as created by indy-sdk and stored on the ledger

id (optional)

<span class="param-type">[String](#string)</span> Schema Id

attrNames (optional)

<span class="param-type">[array\[String\]](#string)</span>

name (optional)

<span class="param-type">[String](#string)</span> Schema Name

version (optional)

<span class="param-type">[String](#string)</span> Schema Version

ver (optional)

<span class="param-type">[String](#string)</span> Schema JSON Version

### <span id="indy_schema_db">`indy_schema_db`</span>

Indy low-level schema as stored in DB

name (optional)

<span class="param-type">[String](#string)</span> Schema Name

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

attrNames (optional)

<span class="param-type">[array\[String\]](#string)</span>

version (optional)

<span class="param-type">[String](#string)</span> Schema Version

wallet (optional)

<span class="param-type">[String](#string)</span> Owner Wallet Id

schemaId (optional)

<span class="param-type">[String](#string)</span> Schema Id

data (optional)

<span class="param-type">[indy_schema](#indy_schema)</span>

### <span id="indy_transaction">`indy_transaction`</span>

Indy Transaction as retrieved from ledger

### <span id="indyschema_post">`indyschema_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

name

<span class="param-type">[String](#string)</span> A unique name of the
schema

version

<span class="param-type">[String](#string)</span> version for schema

attrNames

<span class="param-type">[array\[String\]](#string)</span> list of
attribute names put into the schema

### <span id="login_post">`login_post`</span>

username

<span class="param-type">[String](#string)</span>

password

<span class="param-type">[String](#string)</span>

### <span id="messageId">`messageId`</span>

Sent message id, could be a nonce depending on message format

### <span id="messageType">`messageType`</span>

Message Type

### <span id="message_db">`message_db`</span>

Message Object as stored in DB

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[messageType](#messageType)</span>

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span class="param-type">[Object](#object)</span> Message which is sent
to recipient, see message_formats

meta (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata

### <span id="message_post">`message_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

did

<span class="param-type">[String](#string)</span> Recipient DID

message

<span class="param-type">[String](#string)</span> authcrypted,
base64-encoded message to send

### <span id="nym_post">`nym_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

did

<span class="param-type">[String](#string)</span> Did to write on the
ledger

verkey

<span class="param-type">[String](#string)</span> Verkey of did to write
on the ledger

alias (optional)

<span class="param-type">[String](#string)</span> (Optional) Alias of
did to write on the ledger

role (optional)

<span class="param-type">[String](#string)</span> (Optional) role of did
to write on the ledger (default = NONE)

Enum:

NONE

TRUSTEE

STEWARD

TRUST_ANCHOR

### <span id="pairwise">`pairwise`</span>

myDid (optional)

<span class="param-type">[String](#string)</span> My pairwise DID

theirDid (optional)

<span class="param-type">[String](#string)</span> Their pairwise DID

metadata (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata,
may include other things

### <span id="proof">`proof`</span>

wallet (optional)

<span class="param-type">[String](#string)</span> Recipient wallet Id

did (optional)

<span class="param-type">[String](#string)</span> Proof Sender/Prover
Pairwise Did

proof (optional)

<span class="param-type">[Object](#object)</span> Proof as created by
indy-sdk and sent by prover

status (optional)

<span class="param-type">[String](#string)</span> Proof status (pending
or received)

Enum:

pending

received

meta (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata

isValid (optional)

<span class="param-type">[Boolean](#boolean)</span> Whether proof is
valid or not

### <span id="proof_message">`proof_message`</span>

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/proof

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span
class="param-type">[\#/message_formats/proof](##/message_formats/proof)</span>

### <span id="proof_post">`proof_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

proofRequestId

<span class="param-type">[String](#string)</span> proof request \_id

values (optional)

<span class="param-type">[Object](#object)</span> (Optional) Object
containing self-attested-attributes as key-value pairs

### <span id="proofrequest_message">`proofrequest_message`</span>

id (optional)

<span class="param-type">[id](#id)</span>

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

expireAt (optional)

<span class="param-type">[expireAt](#expireAt)</span>

messageId (optional)

<span class="param-type">[messageId](#messageId)</span>

type (optional)

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/proof_request

senderDid (optional)

<span class="param-type">[senderDid](#senderDid)</span>

recipientDid (optional)

<span class="param-type">[recipientDid](#recipientDid)</span>

message (optional)

<span
class="param-type">[\#/message_formats/proof_request](##/message_formats/proof_request)</span>

meta (optional)

<span class="param-type">[Object](#object)</span> Additional Metadata

### <span id="proofrequest_post">`proofrequest_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

recipientDid

<span class="param-type">[String](#string)</span> DID for whom to create
a proof request

proofRequest

<span class="param-type">[Object](#object)</span> proof request template
\_id or proof request object (see
https://github.com/hyperledger/indy-sdk/blob/master/doc/getting-started/getting-started.md\#apply-for-a-job)

templateValues (optional)

<span class="param-type">[Object](#object)</span> values to use for
rendering the proof request template as key-value object

### <span id="proofrequest_template">`proofrequest_template`</span>

wallet (optional)

<span class="param-type">[String](#string)</span> Owner wallet Id

createdAt (optional)

<span class="param-type">[createdAt](#createdAt)</span>

updatedAt (optional)

<span class="param-type">[updatedAt](#updatedAt)</span>

template (optional)

<span class="param-type">[String](#string)</span> Proof request
mustachejs template string

### <span id="proofrequest_template_post">`proofrequest_template_post`</span>

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

template

<span class="param-type">[String](#string)</span> proof request template
(optionally with mustache placeholders)

### <span id="proofrequest_template_put">`proofrequest_template_put`</span>

wallet (optional)

<span class="param-type">[wallet](#wallet)</span>

template

<span class="param-type">[String](#string)</span> proof request template
(optionally with mustache placeholders)

### <span id="recipientDid">`recipientDid`</span>

Recipient Did

### <span id="schema_details">`schema_details`</span>

name

<span class="param-type">[String](#string)</span> A unique name for the
schema

version

<span class="param-type">[String](#string)</span> Schema version

parentSchemaId (optional)

<span class="param-type">[String](#string)</span> Schema Id of the
parent

createCredentialDefinition (optional)

<span class="param-type">[Boolean](#boolean)</span>

isRevocable (optional)

<span class="param-type">[Boolean](#boolean)</span> Flag to define if
credentials issued with this schema could be revoked. If true it will
generate one or multiple Revocation Registries.

attributes

<span class="param-type">[array\[Object\]](#object)</span> List of
attribute names put into the schema

isDeprecated (optional)

<span class="param-type">[Boolean](#boolean)</span>

lowLevelSchema (optional)

<span class="param-type">[Object](#object)</span>

credentialDefinitionId (optional)

<span class="param-type">[String](#string)</span>

revocationRegistryId (optional)

<span class="param-type">[String](#string)</span>

### <span id="schema_post">`schema_post`</span>

name

<span class="param-type">[String](#string)</span> A unique name for the
schema

version

<span class="param-type">[String](#string)</span> Schema version

parentSchemaId (optional)

<span class="param-type">[String](#string)</span> Schema Id of the
parent

createCredentialDefinition (optional)

<span class="param-type">[Boolean](#boolean)</span>

isRevocable (optional)

<span class="param-type">[Boolean](#boolean)</span> Flag to define if
credentials issued with this schema could be revoked. If true it will
generate one or multiple Revocation Registries.

attributes

<span class="param-type">[array\[Object\]](#object)</span> List of
attribute names put into the schema

### <span id="senderDid">`senderDid`</span>

Sender Did

### <span id="updatedAt">`updatedAt`</span>

Last update time

### <span id="user">`user`</span>

id (optional)

<span class="param-type">[String](#string)</span> A unique string value
identifying a user

username (optional)

<span class="param-type">[String](#string)</span> Username

wallet (optional)

<span class="param-type">[String](#string)</span> Id of user's current
default wallet

### <span id="user_post">`user_post`</span>

username

<span class="param-type">[String](#string)</span>

password

<span class="param-type">[String](#string)</span>

wallet (optional)

<span class="param-type">[wallet_post](#wallet_post)</span>

### <span id="user_put">`user_put`</span>

username (optional)

<span class="param-type">[String](#string)</span> (Optional) New
username

password (optional)

<span class="param-type">[String](#string)</span> (Optional) New
password

wallet (optional)

<span class="param-type">[walletId](#walletId)</span>

### <span id="wallet">`wallet`</span>

id (optional)

<span class="param-type">[String](#string)</span> A unique string value
identifying a wallet

createdAt (optional)

<span class="param-type">[String](#string)</span> wallet creation time

updatedAt (optional)

<span class="param-type">[String](#string)</span> wallet update time

owner (optional)

<span class="param-type">[String](#string)</span> Wallet Owner User Id

users (optional)

<span class="param-type">[array\[String\]](#string)</span> Array of user
Ids which are allowed to use this wallet

credentials (optional)

<span class="param-type">[Object](#object)</span>

ownDid (optional)

<span class="param-type">[String](#string)</span> Wallet primary did

### <span id="walletId">`walletId`</span>

(Optional) A unique id value identifying a wallet

### <span id="wallet_post">`wallet_post`</span>

name (optional)

<span class="param-type">[String](#string)</span> (Optional) Wallet
name, must be globally unique. Automatically generated if none is
provided.

credentials

<span class="param-type">[Object](#object)</span> Wallet Credentials
JSON. Supported keys vary by wallet type. A default config will be used
if none is provided.

seed (optional)

<span class="param-type">[String](#string)</span> (Optional) Seed to use
for initial did creation.
