# IdentityChain API

<div class="app-desc">

IdentityChain Agent REST API

</div>

<div class="app-desc">

Version: 0.2.0

</div>

<div class="app-desc">

BasePath:/

</div>

## Access

1.  APIKey KeyParamName:Authorization KeyInQuery:false KeyInHeader:true

## <span id="__Methods">Methods</span>

\[ Jump to [Models](#__Models) \]

### Table of Contents

<div class="method-summary">

</div>

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

<div class="method">

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Delete a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdGet"></span>

<div class="method-path">

```get
get /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Retrieve a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Delete a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

<div class="method-path">

```get
get /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Retrieve a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestGet"></span>

<div class="method-path">

```get
get /api/connectionrequest
```

</div>

<div class="method-summary">

List all my connection requests
(<span class="nickname">apiConnectionrequestGet</span>)

</div>

<div class="method-notes">

List all my connection requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_request](#connection_request)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestPost"></span>

<div class="method-path">

```post
post /api/connectionrequest
```

</div>

<div class="method-summary">

Accept a connection offer and/or send a connection request
(<span class="nickname">apiConnectionrequestPost</span>)

</div>

<div class="method-notes">

Accept a connection offer and/or send a connection request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionrequest_post](#connectionrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionresponsePost"></span>

<div class="method-path">

```post
post /api/connectionresponse
```

</div>

<div class="method-summary">

Accept a connection request and send a connection response
(<span class="nickname">apiConnectionresponsePost</span>)

</div>

<div class="method-notes">

Accept a connection request and send a connection response

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionresponse_post](#connectionresponse_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_response](#connection_response)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiLoginPost"></span>

<div class="method-path">

```post
post /api/login
```

</div>

<div class="method-summary">

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

</div>

<div class="method-notes">

Allow users to login, will return them a JWT valid for a specific amount
of time

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [login_post](#login_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

</div>

---

<div class="method">

<span id="apiUserPost"></span>

<div class="method-path">

```post
post /api/user
```

</div>

<div class="method-summary">

Register a new user (<span class="nickname">apiUserPost</span>)

</div>

<div class="method-notes">

Register a new user

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_post](#user_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiUserUserDelete"></span>

<div class="method-path">

```delete
delete /api/user/{user}
```

</div>

<div class="method-summary">

Delete a User (<span class="nickname">apiUserUserDelete</span>)

</div>

<div class="method-notes">

Delete a User

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserGet"></span>

<div class="method-path">

```get
get /api/user/{user}
```

</div>

<div class="method-summary">

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

</div>

<div class="method-notes">

Retrieve a user

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserPut"></span>

<div class="method-path">

```put
put /api/user/{user}
```

</div>

<div class="method-summary">

Update a User (at least one of the properties must be provided)
(<span class="nickname">apiUserUserPut</span>)

</div>

<div class="method-notes">

Update a User (at least one of the properties must be provided)

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_put](#user_put) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletGet"></span>

<div class="method-path">

```get
get /api/wallet
```

</div>

<div class="method-summary">

List all wallets of user (<span class="nickname">apiWalletGet</span>)

</div>

<div class="method-notes">

List all wallets of user

</div>

### Return type

<div class="return-type">

array\[[wallet](#wallet)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletPost"></span>

<div class="method-path">

```post
post /api/wallet
```

</div>

<div class="method-summary">

Create a new Wallet (optionally with given name and settings)
(<span class="nickname">apiWalletPost</span>)

</div>

<div class="method-notes">

Create a new Wallet (optionally with given name and settings)

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [wallet_post](#wallet_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/
```

</div>

<div class="method-summary">

List connections/pairwises stored in wallet
(<span class="nickname">apiWalletWalletConnectionGet</span>)

</div>

<div class="method-notes">

List connections/pairwises stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

array\[[pairwise](#pairwise)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionTheirDidGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

</div>

<div class="method-summary">

Retrieve connection/pairwise stored in wallet
(<span class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

</div>

<div class="method-notes">

Retrieve connection/pairwise stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

<div class="param">

theirDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

</div>

</div>

### Return type

<div class="return-type">

[pairwise](#pairwise)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletDelete"></span>

<div class="method-path">

```delete
delete /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

</div>

<div class="method-notes">

Delete a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

</div>

<div class="method-notes">

Retrieve a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

# <span id="Connection">Connection</span>

<div class="method">

<span id="apiConnectionMyDidGet"></span>

<div class="method-path">

```get
get /api/connection/{myDid}
```

</div>

<div class="method-summary">

Retrieve a (pending) connection
(<span class="nickname">apiConnectionMyDidGet</span>)

</div>

<div class="method-notes">

Retrieve a (pending) connection

</div>

### Path parameters

<div class="field-items">

<div class="param">

myDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique did used in a
pairwise

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

[Object](#Object)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Delete a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdGet"></span>

<div class="method-path">

```get
get /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Retrieve a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferGet"></span>

<div class="method-path">

```get
get /api/connectionoffer
```

</div>

<div class="method-summary">

List all my connection offers
(<span class="nickname">apiConnectionofferGet</span>)

</div>

<div class="method-notes">

List all my connection offers

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_offer](#connection_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferPost"></span>

<div class="method-path">

```post
post /api/connectionoffer
```

</div>

<div class="method-summary">

Create a new connection offer
(<span class="nickname">apiConnectionofferPost</span>)

</div>

<div class="method-notes">

Create a new connection offer

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionoffer_post](#connectionoffer_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Delete a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

<div class="method-path">

```get
get /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Retrieve a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestGet"></span>

<div class="method-path">

```get
get /api/connectionrequest
```

</div>

<div class="method-summary">

List all my connection requests
(<span class="nickname">apiConnectionrequestGet</span>)

</div>

<div class="method-notes">

List all my connection requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_request](#connection_request)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestPost"></span>

<div class="method-path">

```post
post /api/connectionrequest
```

</div>

<div class="method-summary">

Accept a connection offer and/or send a connection request
(<span class="nickname">apiConnectionrequestPost</span>)

</div>

<div class="method-notes">

Accept a connection offer and/or send a connection request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionrequest_post](#connectionrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionresponsePost"></span>

<div class="method-path">

```post
post /api/connectionresponse
```

</div>

<div class="method-summary">

Accept a connection request and send a connection response
(<span class="nickname">apiConnectionresponsePost</span>)

</div>

<div class="method-notes">

Accept a connection request and send a connection response

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionresponse_post](#connectionresponse_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_response](#connection_response)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

# <span id="Credential">Credential</span>

<div class="method">

<span id="apiCredentialGet"></span>

<div class="method-path">

```get
get /api/credential/
```

</div>

<div class="method-summary">

List credentials issued by a wallet
(<span class="nickname">apiCredentialGet</span>)

</div>

<div class="method-notes">

List credentials issued by a wallet

</div>

### Request headers

<div class="field-items">

</div>

### Query parameters

<div class="field-items">

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
recipientDid to filter by

</div>

</div>

### Return type

<div class="return-type">

array\[[credential_message](#credential_message)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialIdGet"></span>

<div class="method-path">

```get
get /api/credential/{id}
```

</div>

<div class="method-summary">

Retrieve a credential message issued/sent by a wallet
(<span class="nickname">apiCredentialIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential message issued/sent by a wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_message](#credential_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_message](#credential_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialIdRevokePost"></span>

<div class="method-path">

```post
post /api/credential/{id}/revoke
```

</div>

<div class="method-summary">

Revoke a credential
(<span class="nickname">apiCredentialIdRevokePost</span>)

</div>

<div class="method-notes">

Revoke a credential

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [object](#object) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialPost"></span>

<div class="method-path">

```post
post /api/credential/
```

</div>

<div class="method-summary">

Issue/Create a credential and send to recipient
(<span class="nickname">apiCredentialPost</span>)

</div>

<div class="method-notes">

Issue/Create a credential and send to recipient

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credential_post](#credential_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[credential_message](#credential_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialdefCreddefGet"></span>

<div class="method-path">

```get
get /api/credentialdef/{creddef}
```

</div>

<div class="method-summary">

Retrieve a credential definition from the ledger
(<span class="nickname">apiCredentialdefCreddefGet</span>)

</div>

<div class="method-notes">

Retrieve a credential definition from the ledger

</div>

### Path parameters

<div class="field-items">

<div class="param">

creddef (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential definition.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[indy_credential_definition](#indy_credential_definition)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential_definition](#indy_credential_definition)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialdefGet"></span>

<div class="method-path">

```get
get /api/credentialdef
```

</div>

<div class="method-summary">

List credential definitions of wallet stored in DB
(<span class="nickname">apiCredentialdefGet</span>)

</div>

<div class="method-notes">

List credential definitions of wallet stored in DB

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_definition](#credential_definition)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialdefPost"></span>

<div class="method-path">

```post
post /api/credentialdef
```

</div>

<div class="method-summary">

Create a credential definition
(<span class="nickname">apiCredentialdefPost</span>)

</div>

<div class="method-notes">

Create a credential definition

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credentialdef_post](#credentialdef_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialofferGet"></span>

<div class="method-path">

```get
get /api/credentialoffer
```

</div>

<div class="method-summary">

List credential offers
(<span class="nickname">apiCredentialofferGet</span>)

</div>

<div class="method-notes">

List credential offers

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_offer](#credential_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferIdDelete"></span>

<div class="method-path">

```delete
delete /api/credentialoffer/{id}
```

</div>

<div class="method-summary">

Delete a credential offer
(<span class="nickname">apiCredentialofferIdDelete</span>)

</div>

<div class="method-notes">

Delete a credential offer

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferIdGet"></span>

<div class="method-path">

```get
get /api/credentialoffer/{id}
```

</div>

<div class="method-summary">

Retrieve a credential offer
(<span class="nickname">apiCredentialofferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential offer

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_offer](#credential_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferPost"></span>

<div class="method-path">

```post
post /api/credentialoffer
```

</div>

<div class="method-summary">

Create and send a credential offer
(<span class="nickname">apiCredentialofferPost</span>)

</div>

<div class="method-notes">

Create and send a credential offer

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credentialoffer_post](#credentialoffer_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[credential_offer](#credential_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialrequestGet"></span>

<div class="method-path">

```get
get /api/credentialrequest
```

</div>

<div class="method-summary">

List credential requests
(<span class="nickname">apiCredentialrequestGet</span>)

</div>

<div class="method-notes">

List credential requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/credentialrequest/{id}
```

</div>

<div class="method-summary">

Delete a credential request
(<span class="nickname">apiCredentialrequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a credential request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestIdGet"></span>

<div class="method-path">

```get
get /api/credentialrequest/{id}
```

</div>

<div class="method-summary">

Retrieve a credential request
(<span class="nickname">apiCredentialrequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestPost"></span>

<div class="method-path">

```post
post /api/credentialrequest
```

</div>

<div class="method-summary">

Accept credential offer and create credential request
(<span class="nickname">apiCredentialrequestPost</span>)

</div>

<div class="method-notes">

Accept credential offer and create credential request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credentialrequest_post](#credentialrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

# <span id="Indyschema">Indyschema</span>

<div class="method">

<span id="apiIndyschemaGet"></span>

<div class="method-path">

```get
get /api/indyschema
```

</div>

<div class="method-summary">

List low-level indy schemas
(<span class="nickname">apiIndyschemaGet</span>)

</div>

<div class="method-notes">

List low-level indy schemas

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[indy_schema_db](#indy_schema_db)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiIndyschemaPost"></span>

<div class="method-path">

```post
post /api/indyschema
```

</div>

<div class="method-summary">

Create a low-level indy schema
(<span class="nickname">apiIndyschemaPost</span>)

</div>

<div class="method-notes">

Create a low-level indy schema

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [indyschema_post](#indyschema_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[indy_schema_db](#indy_schema_db)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiIndyschemaSchemaidGet"></span>

<div class="method-path">

```get
get /api/indyschema/{schemaid}
```

</div>

<div class="method-summary">

Retrieve a low-level indy schema
(<span class="nickname">apiIndyschemaSchemaidGet</span>)

</div>

<div class="method-notes">

Retrieve a low-level indy schema

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[indy_schema](#indy_schema)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_schema](#indy_schema)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

# <span id="Issuer">Issuer</span>

<div class="method">

<span id="apiAttributeTypeGet"></span>

<div class="method-path">

```get
get /api/attribute/type
```

</div>

<div class="method-summary">

The types supported by the high-level schema language
(<span class="nickname">apiAttributeTypeGet</span>)

</div>

<div class="method-notes">

The types supported by the high-level schema language

</div>

### Return type

<div class="return-type">

array\[String\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

All the names of the supported types by the schema-compiler

</div>

---

<div class="method">

<span id="apiConnectionMyDidGet"></span>

<div class="method-path">

```get
get /api/connection/{myDid}
```

</div>

<div class="method-summary">

Retrieve a (pending) connection
(<span class="nickname">apiConnectionMyDidGet</span>)

</div>

<div class="method-notes">

Retrieve a (pending) connection

</div>

### Path parameters

<div class="field-items">

<div class="param">

myDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique did used in a
pairwise

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

[Object](#Object)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Delete a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdGet"></span>

<div class="method-path">

```get
get /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Retrieve a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferGet"></span>

<div class="method-path">

```get
get /api/connectionoffer
```

</div>

<div class="method-summary">

List all my connection offers
(<span class="nickname">apiConnectionofferGet</span>)

</div>

<div class="method-notes">

List all my connection offers

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_offer](#connection_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferPost"></span>

<div class="method-path">

```post
post /api/connectionoffer
```

</div>

<div class="method-summary">

Create a new connection offer
(<span class="nickname">apiConnectionofferPost</span>)

</div>

<div class="method-notes">

Create a new connection offer

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionoffer_post](#connectionoffer_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Delete a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

<div class="method-path">

```get
get /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Retrieve a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestGet"></span>

<div class="method-path">

```get
get /api/connectionrequest
```

</div>

<div class="method-summary">

List all my connection requests
(<span class="nickname">apiConnectionrequestGet</span>)

</div>

<div class="method-notes">

List all my connection requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_request](#connection_request)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestPost"></span>

<div class="method-path">

```post
post /api/connectionrequest
```

</div>

<div class="method-summary">

Accept a connection offer and/or send a connection request
(<span class="nickname">apiConnectionrequestPost</span>)

</div>

<div class="method-notes">

Accept a connection offer and/or send a connection request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionrequest_post](#connectionrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionresponsePost"></span>

<div class="method-path">

```post
post /api/connectionresponse
```

</div>

<div class="method-summary">

Accept a connection request and send a connection response
(<span class="nickname">apiConnectionresponsePost</span>)

</div>

<div class="method-notes">

Accept a connection request and send a connection response

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionresponse_post](#connectionresponse_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_response](#connection_response)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialGet"></span>

<div class="method-path">

```get
get /api/credential/
```

</div>

<div class="method-summary">

List credentials issued by a wallet
(<span class="nickname">apiCredentialGet</span>)

</div>

<div class="method-notes">

List credentials issued by a wallet

</div>

### Request headers

<div class="field-items">

</div>

### Query parameters

<div class="field-items">

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
recipientDid to filter by

</div>

</div>

### Return type

<div class="return-type">

array\[[credential_message](#credential_message)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialIdGet"></span>

<div class="method-path">

```get
get /api/credential/{id}
```

</div>

<div class="method-summary">

Retrieve a credential message issued/sent by a wallet
(<span class="nickname">apiCredentialIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential message issued/sent by a wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_message](#credential_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_message](#credential_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialIdRevokePost"></span>

<div class="method-path">

```post
post /api/credential/{id}/revoke
```

</div>

<div class="method-summary">

Revoke a credential
(<span class="nickname">apiCredentialIdRevokePost</span>)

</div>

<div class="method-notes">

Revoke a credential

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this credential.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [object](#object) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialPost"></span>

<div class="method-path">

```post
post /api/credential/
```

</div>

<div class="method-summary">

Issue/Create a credential and send to recipient
(<span class="nickname">apiCredentialPost</span>)

</div>

<div class="method-notes">

Issue/Create a credential and send to recipient

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credential_post](#credential_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[credential_message](#credential_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialdefCreddefGet"></span>

<div class="method-path">

```get
get /api/credentialdef/{creddef}
```

</div>

<div class="method-summary">

Retrieve a credential definition from the ledger
(<span class="nickname">apiCredentialdefCreddefGet</span>)

</div>

<div class="method-notes">

Retrieve a credential definition from the ledger

</div>

### Path parameters

<div class="field-items">

<div class="param">

creddef (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential definition.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[indy_credential_definition](#indy_credential_definition)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential_definition](#indy_credential_definition)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialdefGet"></span>

<div class="method-path">

```get
get /api/credentialdef
```

</div>

<div class="method-summary">

List credential definitions of wallet stored in DB
(<span class="nickname">apiCredentialdefGet</span>)

</div>

<div class="method-notes">

List credential definitions of wallet stored in DB

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_definition](#credential_definition)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialdefPost"></span>

<div class="method-path">

```post
post /api/credentialdef
```

</div>

<div class="method-summary">

Create a credential definition
(<span class="nickname">apiCredentialdefPost</span>)

</div>

<div class="method-notes">

Create a credential definition

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credentialdef_post](#credentialdef_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialofferGet"></span>

<div class="method-path">

```get
get /api/credentialoffer
```

</div>

<div class="method-summary">

List credential offers
(<span class="nickname">apiCredentialofferGet</span>)

</div>

<div class="method-notes">

List credential offers

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_offer](#credential_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferIdDelete"></span>

<div class="method-path">

```delete
delete /api/credentialoffer/{id}
```

</div>

<div class="method-summary">

Delete a credential offer
(<span class="nickname">apiCredentialofferIdDelete</span>)

</div>

<div class="method-notes">

Delete a credential offer

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferIdGet"></span>

<div class="method-path">

```get
get /api/credentialoffer/{id}
```

</div>

<div class="method-summary">

Retrieve a credential offer
(<span class="nickname">apiCredentialofferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential offer

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_offer](#credential_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferPost"></span>

<div class="method-path">

```post
post /api/credentialoffer
```

</div>

<div class="method-summary">

Create and send a credential offer
(<span class="nickname">apiCredentialofferPost</span>)

</div>

<div class="method-notes">

Create and send a credential offer

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credentialoffer_post](#credentialoffer_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[credential_offer](#credential_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialrequestGet"></span>

<div class="method-path">

```get
get /api/credentialrequest
```

</div>

<div class="method-summary">

List credential requests
(<span class="nickname">apiCredentialrequestGet</span>)

</div>

<div class="method-notes">

List credential requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/credentialrequest/{id}
```

</div>

<div class="method-summary">

Delete a credential request
(<span class="nickname">apiCredentialrequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a credential request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestIdGet"></span>

<div class="method-path">

```get
get /api/credentialrequest/{id}
```

</div>

<div class="method-summary">

Retrieve a credential request
(<span class="nickname">apiCredentialrequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestPost"></span>

<div class="method-path">

```post
post /api/credentialrequest
```

</div>

<div class="method-summary">

Accept credential offer and create credential request
(<span class="nickname">apiCredentialrequestPost</span>)

</div>

<div class="method-notes">

Accept credential offer and create credential request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [credentialrequest_post](#credentialrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiIndyschemaGet"></span>

<div class="method-path">

```get
get /api/indyschema
```

</div>

<div class="method-summary">

List low-level indy schemas
(<span class="nickname">apiIndyschemaGet</span>)

</div>

<div class="method-notes">

List low-level indy schemas

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[indy_schema_db](#indy_schema_db)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiIndyschemaPost"></span>

<div class="method-path">

```post
post /api/indyschema
```

</div>

<div class="method-summary">

Create a low-level indy schema
(<span class="nickname">apiIndyschemaPost</span>)

</div>

<div class="method-notes">

Create a low-level indy schema

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [indyschema_post](#indyschema_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[indy_schema_db](#indy_schema_db)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiIndyschemaSchemaidGet"></span>

<div class="method-path">

```get
get /api/indyschema/{schemaid}
```

</div>

<div class="method-summary">

Retrieve a low-level indy schema
(<span class="nickname">apiIndyschemaSchemaidGet</span>)

</div>

<div class="method-notes">

Retrieve a low-level indy schema

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[indy_schema](#indy_schema)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_schema](#indy_schema)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiLoginPost"></span>

<div class="method-path">

```post
post /api/login
```

</div>

<div class="method-summary">

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

</div>

<div class="method-notes">

Allow users to login, will return them a JWT valid for a specific amount
of time

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [login_post](#login_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

</div>

---

<div class="method">

<span id="apiSchemaGet"></span>

<div class="method-path">

```get
get /api/schema
```

</div>

<div class="method-summary">

List schemas (<span class="nickname">apiSchemaGet</span>)

</div>

<div class="method-notes">

List schemas from the logged in user

</div>

### Request headers

<div class="field-items">

</div>

### Query parameters

<div class="field-items">

<div class="param">

onlyActive (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional) Flag to
filter all non-active schemas

</div>

</div>

### Return type

<div class="return-type">

array\[Object\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

</div>

---

<div class="method">

<span id="apiSchemaPost"></span>

<div class="method-path">

```post
post /api/schema
```

</div>

<div class="method-summary">

Create a Schema (<span class="nickname">apiSchemaPost</span>)

</div>

<div class="method-notes">

Create a Schema, Credential Definition \&amp; Revocation Registry (if
revocable) for the logged in user

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [schema_post](#schema_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Responses

#### 201

[](#)

#### 400

Schema does not pass the schema compiler/typechecker [](#)

#### 409

Schema with the same name and version already exists [](#)

</div>

---

<div class="method">

<span id="apiSchemaSchemaidGet"></span>

<div class="method-path">

```get
get /api/schema/{schemaid}
```

</div>

<div class="method-summary">

Retrieve a schema (<span class="nickname">apiSchemaSchemaidGet</span>)

</div>

<div class="method-notes">

Retrieve a schema

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[schema_details](#schema_details)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Schema Details [schema_details](#schema_details)

#### 404

Schema with that ID not found in database [](#)

</div>

---

<div class="method">

<span id="apiSchemaSchemaidPatch"></span>

<div class="method-path">

```patch
patch /api/schema/{schemaid}
```

</div>

<div class="method-summary">

Alter schema by the given operation
(<span class="nickname">apiSchemaSchemaidPatch</span>)

</div>

<div class="method-notes">

Alter schema by the given operation

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [object](#object) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Responses

#### 204

Successfully altered schema [](#)

#### 422

Schema does not support revocations, or is already revoked [](#)

</div>

---

<div class="method">

<span id="apiUserPost"></span>

<div class="method-path">

```post
post /api/user
```

</div>

<div class="method-summary">

Register a new user (<span class="nickname">apiUserPost</span>)

</div>

<div class="method-notes">

Register a new user

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_post](#user_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiUserUserDelete"></span>

<div class="method-path">

```delete
delete /api/user/{user}
```

</div>

<div class="method-summary">

Delete a User (<span class="nickname">apiUserUserDelete</span>)

</div>

<div class="method-notes">

Delete a User

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserGet"></span>

<div class="method-path">

```get
get /api/user/{user}
```

</div>

<div class="method-summary">

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

</div>

<div class="method-notes">

Retrieve a user

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserPut"></span>

<div class="method-path">

```put
put /api/user/{user}
```

</div>

<div class="method-summary">

Update a User (at least one of the properties must be provided)
(<span class="nickname">apiUserUserPut</span>)

</div>

<div class="method-notes">

Update a User (at least one of the properties must be provided)

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_put](#user_put) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletGet"></span>

<div class="method-path">

```get
get /api/wallet
```

</div>

<div class="method-summary">

List all wallets of user (<span class="nickname">apiWalletGet</span>)

</div>

<div class="method-notes">

List all wallets of user

</div>

### Return type

<div class="return-type">

array\[[wallet](#wallet)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletPost"></span>

<div class="method-path">

```post
post /api/wallet
```

</div>

<div class="method-summary">

Create a new Wallet (optionally with given name and settings)
(<span class="nickname">apiWalletPost</span>)

</div>

<div class="method-notes">

Create a new Wallet (optionally with given name and settings)

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [wallet_post](#wallet_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/
```

</div>

<div class="method-summary">

List connections/pairwises stored in wallet
(<span class="nickname">apiWalletWalletConnectionGet</span>)

</div>

<div class="method-notes">

List connections/pairwises stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

array\[[pairwise](#pairwise)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionTheirDidGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

</div>

<div class="method-summary">

Retrieve connection/pairwise stored in wallet
(<span class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

</div>

<div class="method-notes">

Retrieve connection/pairwise stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

<div class="param">

theirDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

</div>

</div>

### Return type

<div class="return-type">

[pairwise](#pairwise)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletDelete"></span>

<div class="method-path">

```delete
delete /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

</div>

<div class="method-notes">

Delete a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

</div>

<div class="method-notes">

Retrieve a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="tailsRevocRegDefIdGet"></span>

<div class="method-path">

```get
get /tails/{revocRegDefId}
```

</div>

<div class="method-summary">

Agent Revocation Tails Endpoint
(<span class="nickname">tailsRevocRegDefIdGet</span>)

</div>

<div class="method-notes">

Public immutable shared blob linked to given revocation registry
definition

</div>

### Path parameters

<div class="field-items">

<div class="param">

revocRegDefId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — unique id of revocation
registry

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

</div>

---

# <span id="Message">Message</span>

<div class="method">

<span id="apiMessageGet"></span>

<div class="method-path">

```get
get /api/message/
```

</div>

<div class="method-summary">

List messages (<span class="nickname">apiMessageGet</span>)

</div>

<div class="method-notes">

List messages

</div>

### Request headers

<div class="field-items">

</div>

### Query parameters

<div class="field-items">

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional) A single
message type to filter by

</div>

</div>

### Return type

<div class="return-type">

array\[[message_db](#message_db)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiMessageMessageIdDelete"></span>

<div class="method-path">

```delete
delete /api/message/{messageId}
```

</div>

<div class="method-summary">

Delete a message
(<span class="nickname">apiMessageMessageIdDelete</span>)

</div>

<div class="method-notes">

Delete a message

</div>

### Path parameters

<div class="field-items">

<div class="param">

messageId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a message.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiMessageMessageIdGet"></span>

<div class="method-path">

```get
get /api/message/{messageId}
```

</div>

<div class="method-summary">

Retrieve a message
(<span class="nickname">apiMessageMessageIdGet</span>)

</div>

<div class="method-notes">

Retrieve a message

</div>

### Path parameters

<div class="field-items">

<div class="param">

messageId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a message.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[message_db](#message_db)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [message_db](#message_db)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiMessagePost"></span>

<div class="method-path">

```post
post /api/message/
```

</div>

<div class="method-summary">

Send message (<span class="nickname">apiMessagePost</span>)

</div>

<div class="method-notes">

Send message

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [message_post](#message_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="indyPost"></span>

<div class="method-path">

```post
post /indy/
```

</div>

<div class="method-summary">

Agent Message Endpoint (<span class="nickname">indyPost</span>)

</div>

<div class="method-notes">

Agent Message Endpoint

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [indy_post](#indy_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 202

Accepted [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

</div>

---

# <span id="Proof">Proof</span>

<div class="method">

<span id="apiProofGet"></span>

<div class="method-path">

```get
get /api/proof
```

</div>

<div class="method-summary">

List received proofs (<span class="nickname">apiProofGet</span>)

</div>

<div class="method-notes">

List received proofs

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[proof](#proof)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofIdDelete"></span>

<div class="method-path">

```delete
delete /api/proof/{id}
```

</div>

<div class="method-summary">

Delete a received proof (<span class="nickname">apiProofIdDelete</span>)

</div>

<div class="method-notes">

Delete a received proof

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofIdGet"></span>

<div class="method-path">

```get
get /api/proof/{id}
```

</div>

<div class="method-summary">

Retrieve a received proof (including whether it is valid)
(<span class="nickname">apiProofIdGet</span>)

</div>

<div class="method-notes">

Retrieve a received proof (including whether it is valid)

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[proof](#proof)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiProofPost"></span>

<div class="method-path">

```post
post /api/proof
```

</div>

<div class="method-summary">

Create and send a Proof (<span class="nickname">apiProofPost</span>)

</div>

<div class="method-notes">

Create and send a Proof

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proof_post](#proof_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[proof_message](#proof_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiProofrequestGet"></span>

<div class="method-path">

```get
get /api/proofrequest
```

</div>

<div class="method-summary">

List proof requests (<span class="nickname">apiProofrequestGet</span>)

</div>

<div class="method-notes">

List proof requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[proofrequest_message](#proofrequest_message)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/proofrequest/{id}
```

</div>

<div class="method-summary">

Delete a proof request
(<span class="nickname">apiProofrequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a proof request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestIdGet"></span>

<div class="method-path">

```get
get /api/proofrequest/{id}
```

</div>

<div class="method-summary">

Retrieve a proof request
(<span class="nickname">apiProofrequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a proof request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[proofrequest_message](#proofrequest_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_message](#proofrequest_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestPost"></span>

<div class="method-path">

```post
post /api/proofrequest
```

</div>

<div class="method-summary">

Create and send a proof request
(<span class="nickname">apiProofrequestPost</span>)

</div>

<div class="method-notes">

Create and send a proof request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proofrequest_post](#proofrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[proofrequest_message](#proofrequest_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiProofrequesttemplateGet"></span>

<div class="method-path">

```get
get /api/proofrequesttemplate
```

</div>

<div class="method-summary">

List proof request templates
(<span class="nickname">apiProofrequesttemplateGet</span>)

</div>

<div class="method-notes">

List proof request templates

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[proofrequest_template](#proofrequest_template)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequesttemplateIdDelete"></span>

<div class="method-path">

```delete
delete /api/proofrequesttemplate/{id}
```

</div>

<div class="method-summary">

Delete a proof request template
(<span class="nickname">apiProofrequesttemplateIdDelete</span>)

</div>

<div class="method-notes">

Delete a proof request template

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequesttemplateIdGet"></span>

<div class="method-path">

```get
get /api/proofrequesttemplate/{id}
```

</div>

<div class="method-summary">

Retrieve a proof request template
(<span class="nickname">apiProofrequesttemplateIdGet</span>)

</div>

<div class="method-notes">

Retrieve a proof request template

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[proofrequest_template](#proofrequest_template)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_template](#proofrequest_template)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequesttemplateIdPut"></span>

<div class="method-path">

```put
put /api/proofrequesttemplate/{id}
```

</div>

<div class="method-summary">

Update a proof request template
(<span class="nickname">apiProofrequesttemplateIdPut</span>)

</div>

<div class="method-notes">

Update a proof request template

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proofrequest_template_put](#proofrequest_template_put)
(optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Responses

#### 200

[](#)

#### 404

Proof request template Id not found [](#)

</div>

---

<div class="method">

<span id="apiProofrequesttemplatePost"></span>

<div class="method-path">

```post
post /api/proofrequesttemplate
```

</div>

<div class="method-summary">

Create a proof request templates
(<span class="nickname">apiProofrequesttemplatePost</span>)

</div>

<div class="method-notes">

Create a proof request templates

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proofrequest_template_post](#proofrequest_template_post)
(optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[proofrequest_template](#proofrequest_template)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="tailsRevocRegDefIdGet"></span>

<div class="method-path">

```get
get /tails/{revocRegDefId}
```

</div>

<div class="method-summary">

Agent Revocation Tails Endpoint
(<span class="nickname">tailsRevocRegDefIdGet</span>)

</div>

<div class="method-notes">

Public immutable shared blob linked to given revocation registry
definition

</div>

### Path parameters

<div class="field-items">

<div class="param">

revocRegDefId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — unique id of revocation
registry

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

</div>

---

# <span id="Prover">Prover</span>

<div class="method">

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Delete a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdGet"></span>

<div class="method-path">

```get
get /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Retrieve a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Delete a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

<div class="method-path">

```get
get /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Retrieve a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestGet"></span>

<div class="method-path">

```get
get /api/connectionrequest
```

</div>

<div class="method-summary">

List all my connection requests
(<span class="nickname">apiConnectionrequestGet</span>)

</div>

<div class="method-notes">

List all my connection requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_request](#connection_request)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestPost"></span>

<div class="method-path">

```post
post /api/connectionrequest
```

</div>

<div class="method-summary">

Accept a connection offer and/or send a connection request
(<span class="nickname">apiConnectionrequestPost</span>)

</div>

<div class="method-notes">

Accept a connection offer and/or send a connection request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionrequest_post](#connectionrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionresponsePost"></span>

<div class="method-path">

```post
post /api/connectionresponse
```

</div>

<div class="method-summary">

Accept a connection request and send a connection response
(<span class="nickname">apiConnectionresponsePost</span>)

</div>

<div class="method-notes">

Accept a connection request and send a connection response

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionresponse_post](#connectionresponse_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_response](#connection_response)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiCredentialofferGet"></span>

<div class="method-path">

```get
get /api/credentialoffer
```

</div>

<div class="method-summary">

List credential offers
(<span class="nickname">apiCredentialofferGet</span>)

</div>

<div class="method-notes">

List credential offers

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_offer](#credential_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferIdDelete"></span>

<div class="method-path">

```delete
delete /api/credentialoffer/{id}
```

</div>

<div class="method-summary">

Delete a credential offer
(<span class="nickname">apiCredentialofferIdDelete</span>)

</div>

<div class="method-notes">

Delete a credential offer

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialofferIdGet"></span>

<div class="method-path">

```get
get /api/credentialoffer/{id}
```

</div>

<div class="method-summary">

Retrieve a credential offer
(<span class="nickname">apiCredentialofferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential offer

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential offer.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[credential_offer](#credential_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestGet"></span>

<div class="method-path">

```get
get /api/credentialrequest
```

</div>

<div class="method-summary">

List credential requests
(<span class="nickname">apiCredentialrequestGet</span>)

</div>

<div class="method-notes">

List credential requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/credentialrequest/{id}
```

</div>

<div class="method-summary">

Delete a credential request
(<span class="nickname">apiCredentialrequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a credential request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiCredentialrequestIdGet"></span>

<div class="method-path">

```get
get /api/credentialrequest/{id}
```

</div>

<div class="method-summary">

Retrieve a credential request
(<span class="nickname">apiCredentialrequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a credential request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a credential request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[credential_request](#credential_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [credential_request](#credential_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiLoginPost"></span>

<div class="method-path">

```post
post /api/login
```

</div>

<div class="method-summary">

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

</div>

<div class="method-notes">

Allow users to login, will return them a JWT valid for a specific amount
of time

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [login_post](#login_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

</div>

---

<div class="method">

<span id="apiProofPost"></span>

<div class="method-path">

```post
post /api/proof
```

</div>

<div class="method-summary">

Create and send a Proof (<span class="nickname">apiProofPost</span>)

</div>

<div class="method-notes">

Create and send a Proof

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proof_post](#proof_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[proof_message](#proof_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiProofrequestGet"></span>

<div class="method-path">

```get
get /api/proofrequest
```

</div>

<div class="method-summary">

List proof requests (<span class="nickname">apiProofrequestGet</span>)

</div>

<div class="method-notes">

List proof requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[proofrequest_message](#proofrequest_message)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/proofrequest/{id}
```

</div>

<div class="method-summary">

Delete a proof request
(<span class="nickname">apiProofrequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a proof request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestIdGet"></span>

<div class="method-path">

```get
get /api/proofrequest/{id}
```

</div>

<div class="method-summary">

Retrieve a proof request
(<span class="nickname">apiProofrequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a proof request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[proofrequest_message](#proofrequest_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_message](#proofrequest_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiUserPost"></span>

<div class="method-path">

```post
post /api/user
```

</div>

<div class="method-summary">

Register a new user (<span class="nickname">apiUserPost</span>)

</div>

<div class="method-notes">

Register a new user

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_post](#user_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiUserUserDelete"></span>

<div class="method-path">

```delete
delete /api/user/{user}
```

</div>

<div class="method-summary">

Delete a User (<span class="nickname">apiUserUserDelete</span>)

</div>

<div class="method-notes">

Delete a User

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserGet"></span>

<div class="method-path">

```get
get /api/user/{user}
```

</div>

<div class="method-summary">

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

</div>

<div class="method-notes">

Retrieve a user

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserPut"></span>

<div class="method-path">

```put
put /api/user/{user}
```

</div>

<div class="method-summary">

Update a User (at least one of the properties must be provided)
(<span class="nickname">apiUserUserPut</span>)

</div>

<div class="method-notes">

Update a User (at least one of the properties must be provided)

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_put](#user_put) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletGet"></span>

<div class="method-path">

```get
get /api/wallet
```

</div>

<div class="method-summary">

List all wallets of user (<span class="nickname">apiWalletGet</span>)

</div>

<div class="method-notes">

List all wallets of user

</div>

### Return type

<div class="return-type">

array\[[wallet](#wallet)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletPost"></span>

<div class="method-path">

```post
post /api/wallet
```

</div>

<div class="method-summary">

Create a new Wallet (optionally with given name and settings)
(<span class="nickname">apiWalletPost</span>)

</div>

<div class="method-notes">

Create a new Wallet (optionally with given name and settings)

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [wallet_post](#wallet_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/
```

</div>

<div class="method-summary">

List connections/pairwises stored in wallet
(<span class="nickname">apiWalletWalletConnectionGet</span>)

</div>

<div class="method-notes">

List connections/pairwises stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

array\[[pairwise](#pairwise)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionTheirDidGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

</div>

<div class="method-summary">

Retrieve connection/pairwise stored in wallet
(<span class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

</div>

<div class="method-notes">

Retrieve connection/pairwise stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

<div class="param">

theirDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

</div>

</div>

### Return type

<div class="return-type">

[pairwise](#pairwise)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletCredentialCredentialGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/credential/{credential}
```

</div>

<div class="method-summary">

Retrieve credential stored in wallet
(<span class="nickname">apiWalletWalletCredentialCredentialGet</span>)

</div>

<div class="method-notes">

Retrieve credential stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

<div class="param">

credential (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a credential

</div>

</div>

### Return type

<div class="return-type">

[indy_credential](#indy_credential)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential](#indy_credential)

</div>

---

<div class="method">

<span id="apiWalletWalletCredentialGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/credential/
```

</div>

<div class="method-summary">

List credentials stored in wallet
(<span class="nickname">apiWalletWalletCredentialGet</span>)

</div>

<div class="method-notes">

List credentials stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Query parameters

<div class="field-items">

<div class="param">

schema_id (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional) schema_id
to filter credentials

</div>

<div class="param">

schema_issuer_did (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
schema_issuer_did to filter credentials

</div>

<div class="param">

schema_name (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
schema_name to filter credentials

</div>

<div class="param">

schema_version (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
schema_version to filter credentials

</div>

<div class="param">

issuer_did (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional) issuer_did
to filter credentials

</div>

<div class="param">

cred_def_id (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
cred_def_id to filter credentials

</div>

</div>

### Return type

<div class="return-type">

array\[[indy_credential](#indy_credential)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletWalletDelete"></span>

<div class="method-path">

```delete
delete /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

</div>

<div class="method-notes">

Delete a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

</div>

<div class="method-notes">

Retrieve a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="tailsRevocRegDefIdGet"></span>

<div class="method-path">

```get
get /tails/{revocRegDefId}
```

</div>

<div class="method-summary">

Agent Revocation Tails Endpoint
(<span class="nickname">tailsRevocRegDefIdGet</span>)

</div>

<div class="method-notes">

Public immutable shared blob linked to given revocation registry
definition

</div>

### Path parameters

<div class="field-items">

<div class="param">

revocRegDefId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — unique id of revocation
registry

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [](#)

#### 400

Bad Request [error_message](#error_message)

#### 404

Not Found [error_message](#error_message)

</div>

---

# <span id="Schema">Schema</span>

<div class="method">

<span id="apiAttributeTypeGet"></span>

<div class="method-path">

```get
get /api/attribute/type
```

</div>

<div class="method-summary">

The types supported by the high-level schema language
(<span class="nickname">apiAttributeTypeGet</span>)

</div>

<div class="method-notes">

The types supported by the high-level schema language

</div>

### Return type

<div class="return-type">

array\[String\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

All the names of the supported types by the schema-compiler

</div>

---

<div class="method">

<span id="apiSchemaGet"></span>

<div class="method-path">

```get
get /api/schema
```

</div>

<div class="method-summary">

List schemas (<span class="nickname">apiSchemaGet</span>)

</div>

<div class="method-notes">

List schemas from the logged in user

</div>

### Request headers

<div class="field-items">

</div>

### Query parameters

<div class="field-items">

<div class="param">

onlyActive (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional) Flag to
filter all non-active schemas

</div>

</div>

### Return type

<div class="return-type">

array\[Object\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

</div>

---

<div class="method">

<span id="apiSchemaPost"></span>

<div class="method-path">

```post
post /api/schema
```

</div>

<div class="method-summary">

Create a Schema (<span class="nickname">apiSchemaPost</span>)

</div>

<div class="method-notes">

Create a Schema, Credential Definition \&amp; Revocation Registry (if
revocable) for the logged in user

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [schema_post](#schema_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Responses

#### 201

[](#)

#### 400

Schema does not pass the schema compiler/typechecker [](#)

#### 409

Schema with the same name and version already exists [](#)

</div>

---

<div class="method">

<span id="apiSchemaSchemaidGet"></span>

<div class="method-path">

```get
get /api/schema/{schemaid}
```

</div>

<div class="method-summary">

Retrieve a schema (<span class="nickname">apiSchemaSchemaidGet</span>)

</div>

<div class="method-notes">

Retrieve a schema

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[schema_details](#schema_details)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Schema Details [schema_details](#schema_details)

#### 404

Schema with that ID not found in database [](#)

</div>

---

<div class="method">

<span id="apiSchemaSchemaidPatch"></span>

<div class="method-path">

```patch
patch /api/schema/{schemaid}
```

</div>

<div class="method-summary">

Alter schema by the given operation
(<span class="nickname">apiSchemaSchemaidPatch</span>)

</div>

<div class="method-notes">

Alter schema by the given operation

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [object](#object) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Responses

#### 204

Successfully altered schema [](#)

#### 422

Schema does not support revocations, or is already revoked [](#)

</div>

---

# <span id="Transaction">Transaction</span>

<div class="method">

<span id="apiNymDidGet"></span>

<div class="method-path">

```get
get /api/nym/{did}
```

</div>

<div class="method-summary">

Retrieve Nym from ledger (<span class="nickname">apiNymDidGet</span>)

</div>

<div class="method-notes">

Retrieve Nym from ledger

</div>

### Path parameters

<div class="field-items">

<div class="param">

did (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — Did of NYM record to
retrieve

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[indy_nym](#indy_nym)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_nym](#indy_nym)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiNymPost"></span>

<div class="method-path">

```post
post /api/nym
```

</div>

<div class="method-summary">

Send Nym request to the ledger
(<span class="nickname">apiNymPost</span>)

</div>

<div class="method-notes">

Send Nym request to the ledger

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [nym_post](#nym_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[indy_nym_result](#indy_nym_result)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiTransactionsGet"></span>

<div class="method-path">

```get
get /api/transactions
```

</div>

<div class="method-summary">

(<span class="nickname">apiTransactionsGet</span>)

</div>

<div class="method-notes">

Get ledger transactions from-to indexes

</div>

### Request headers

<div class="field-items">

</div>

### Query parameters

<div class="field-items">

<div class="param">

from (required)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — Sequence Number of
first transaction to query (greater than 0)

</div>

<div class="param">

to (required)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — Sequence Number of
last transaction to query (greater than from index)

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — Ledger Type: pool,
domain, config. By default is DOMAIN

</div>

</div>

### Return type

<div class="return-type">

array\[[indy_transaction](#indy_transaction)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

# <span id="User">User</span>

<div class="method">

<span id="apiLoginPost"></span>

<div class="method-path">

```post
post /api/login
```

</div>

<div class="method-summary">

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

</div>

<div class="method-notes">

Allow users to login, will return them a JWT valid for a specific amount
of time

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [login_post](#login_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

</div>

---

<div class="method">

<span id="apiUserPost"></span>

<div class="method-path">

```post
post /api/user
```

</div>

<div class="method-summary">

Register a new user (<span class="nickname">apiUserPost</span>)

</div>

<div class="method-notes">

Register a new user

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_post](#user_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiUserUserDelete"></span>

<div class="method-path">

```delete
delete /api/user/{user}
```

</div>

<div class="method-summary">

Delete a User (<span class="nickname">apiUserUserDelete</span>)

</div>

<div class="method-notes">

Delete a User

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserGet"></span>

<div class="method-path">

```get
get /api/user/{user}
```

</div>

<div class="method-summary">

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

</div>

<div class="method-notes">

Retrieve a user

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserPut"></span>

<div class="method-path">

```put
put /api/user/{user}
```

</div>

<div class="method-summary">

Update a User (at least one of the properties must be provided)
(<span class="nickname">apiUserUserPut</span>)

</div>

<div class="method-notes">

Update a User (at least one of the properties must be provided)

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_put](#user_put) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

# <span id="Verifier">Verifier</span>

<div class="method">

<span id="apiConnectionMyDidGet"></span>

<div class="method-path">

```get
get /api/connection/{myDid}
```

</div>

<div class="method-summary">

Retrieve a (pending) connection
(<span class="nickname">apiConnectionMyDidGet</span>)

</div>

<div class="method-notes">

Retrieve a (pending) connection

</div>

### Path parameters

<div class="field-items">

<div class="param">

myDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique did used in a
pairwise

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

[Object](#Object)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Delete a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferConnectionOfferIdGet"></span>

<div class="method-path">

```get
get /api/connectionoffer/{connectionOfferId}
```

</div>

<div class="method-summary">

Retrieve a connection offer by \_id
(<span class="nickname">apiConnectionofferConnectionOfferIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection offer by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionOfferId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection offer \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_offer](#connection_offer)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferGet"></span>

<div class="method-path">

```get
get /api/connectionoffer
```

</div>

<div class="method-summary">

List all my connection offers
(<span class="nickname">apiConnectionofferGet</span>)

</div>

<div class="method-notes">

List all my connection offers

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_offer](#connection_offer)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionofferPost"></span>

<div class="method-path">

```post
post /api/connectionoffer
```

</div>

<div class="method-summary">

Create a new connection offer
(<span class="nickname">apiConnectionofferPost</span>)

</div>

<div class="method-notes">

Create a new connection offer

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionoffer_post](#connectionoffer_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_offer](#connection_offer)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Delete a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestConnectionRequestIdGet"></span>

<div class="method-path">

```get
get /api/connectionrequest/{connectionRequestId}
```

</div>

<div class="method-summary">

Retrieve a connection request by \_id
(<span class="nickname">apiConnectionrequestConnectionRequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a connection request by \_id

</div>

### Path parameters

<div class="field-items">

<div class="param">

connectionRequestId (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — connection request \_id

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [connection_request](#connection_request)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestGet"></span>

<div class="method-path">

```get
get /api/connectionrequest
```

</div>

<div class="method-summary">

List all my connection requests
(<span class="nickname">apiConnectionrequestGet</span>)

</div>

<div class="method-notes">

List all my connection requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[connection_request](#connection_request)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiConnectionrequestPost"></span>

<div class="method-path">

```post
post /api/connectionrequest
```

</div>

<div class="method-summary">

Accept a connection offer and/or send a connection request
(<span class="nickname">apiConnectionrequestPost</span>)

</div>

<div class="method-notes">

Accept a connection offer and/or send a connection request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionrequest_post](#connectionrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_request](#connection_request)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiConnectionresponsePost"></span>

<div class="method-path">

```post
post /api/connectionresponse
```

</div>

<div class="method-summary">

Accept a connection request and send a connection response
(<span class="nickname">apiConnectionresponsePost</span>)

</div>

<div class="method-notes">

Accept a connection request and send a connection response

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [connectionresponse_post](#connectionresponse_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[connection_response](#connection_response)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiIndyschemaSchemaidGet"></span>

<div class="method-path">

```get
get /api/indyschema/{schemaid}
```

</div>

<div class="method-summary">

Retrieve a low-level indy schema
(<span class="nickname">apiIndyschemaSchemaidGet</span>)

</div>

<div class="method-notes">

Retrieve a low-level indy schema

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[indy_schema](#indy_schema)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_schema](#indy_schema)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiLoginPost"></span>

<div class="method-path">

```post
post /api/login
```

</div>

<div class="method-summary">

Allow users to login, will return them a JWT valid for a specific amount
of time (<span class="nickname">apiLoginPost</span>)

</div>

<div class="method-notes">

Allow users to login, will return them a JWT valid for a specific amount
of time

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [login_post](#login_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Login successful [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

#### 401

Login failed [Object](#Object)

</div>

---

<div class="method">

<span id="apiProofGet"></span>

<div class="method-path">

```get
get /api/proof
```

</div>

<div class="method-summary">

List received proofs (<span class="nickname">apiProofGet</span>)

</div>

<div class="method-notes">

List received proofs

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[proof](#proof)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofIdDelete"></span>

<div class="method-path">

```delete
delete /api/proof/{id}
```

</div>

<div class="method-summary">

Delete a received proof (<span class="nickname">apiProofIdDelete</span>)

</div>

<div class="method-notes">

Delete a received proof

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofIdGet"></span>

<div class="method-path">

```get
get /api/proof/{id}
```

</div>

<div class="method-summary">

Retrieve a received proof (including whether it is valid)
(<span class="nickname">apiProofIdGet</span>)

</div>

<div class="method-notes">

Retrieve a received proof (including whether it is valid)

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[proof](#proof)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiProofrequestGet"></span>

<div class="method-path">

```get
get /api/proofrequest
```

</div>

<div class="method-summary">

List proof requests (<span class="nickname">apiProofrequestGet</span>)

</div>

<div class="method-notes">

List proof requests

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[proofrequest_message](#proofrequest_message)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestIdDelete"></span>

<div class="method-path">

```delete
delete /api/proofrequest/{id}
```

</div>

<div class="method-summary">

Delete a proof request
(<span class="nickname">apiProofrequestIdDelete</span>)

</div>

<div class="method-notes">

Delete a proof request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestIdGet"></span>

<div class="method-path">

```get
get /api/proofrequest/{id}
```

</div>

<div class="method-summary">

Retrieve a proof request
(<span class="nickname">apiProofrequestIdGet</span>)

</div>

<div class="method-notes">

Retrieve a proof request

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[proofrequest_message](#proofrequest_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_message](#proofrequest_message)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequestPost"></span>

<div class="method-path">

```post
post /api/proofrequest
```

</div>

<div class="method-summary">

Create and send a proof request
(<span class="nickname">apiProofrequestPost</span>)

</div>

<div class="method-notes">

Create and send a proof request

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proofrequest_post](#proofrequest_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[proofrequest_message](#proofrequest_message)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiProofrequesttemplateGet"></span>

<div class="method-path">

```get
get /api/proofrequesttemplate
```

</div>

<div class="method-summary">

List proof request templates
(<span class="nickname">apiProofrequesttemplateGet</span>)

</div>

<div class="method-notes">

List proof request templates

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

array\[[proofrequest_template](#proofrequest_template)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequesttemplateIdDelete"></span>

<div class="method-path">

```delete
delete /api/proofrequesttemplate/{id}
```

</div>

<div class="method-summary">

Delete a proof request template
(<span class="nickname">apiProofrequesttemplateIdDelete</span>)

</div>

<div class="method-notes">

Delete a proof request template

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequesttemplateIdGet"></span>

<div class="method-path">

```get
get /api/proofrequesttemplate/{id}
```

</div>

<div class="method-summary">

Retrieve a proof request template
(<span class="nickname">apiProofrequesttemplateIdGet</span>)

</div>

<div class="method-notes">

Retrieve a proof request template

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[proofrequest_template](#proofrequest_template)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [proofrequest_template](#proofrequest_template)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiProofrequesttemplateIdPut"></span>

<div class="method-path">

```put
put /api/proofrequesttemplate/{id}
```

</div>

<div class="method-summary">

Update a proof request template
(<span class="nickname">apiProofrequesttemplateIdPut</span>)

</div>

<div class="method-notes">

Update a proof request template

</div>

### Path parameters

<div class="field-items">

<div class="param">

id (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying a proof request template.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proofrequest_template_put](#proofrequest_template_put)
(optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Responses

#### 200

[](#)

#### 404

Proof request template Id not found [](#)

</div>

---

<div class="method">

<span id="apiProofrequesttemplatePost"></span>

<div class="method-path">

```post
post /api/proofrequesttemplate
```

</div>

<div class="method-summary">

Create a proof request templates
(<span class="nickname">apiProofrequesttemplatePost</span>)

</div>

<div class="method-notes">

Create a proof request templates

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [proofrequest_template_post](#proofrequest_template_post)
(optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[proofrequest_template](#proofrequest_template)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiSchemaSchemaidGet"></span>

<div class="method-path">

```get
get /api/schema/{schemaid}
```

</div>

<div class="method-summary">

Retrieve a schema (<span class="nickname">apiSchemaSchemaidGet</span>)

</div>

<div class="method-notes">

Retrieve a schema

</div>

### Path parameters

<div class="field-items">

<div class="param">

schemaid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique string value
identifying this schema.

</div>

</div>

### Request headers

<div class="field-items">

</div>

### Return type

<div class="return-type">

[schema_details](#schema_details)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Schema Details [schema_details](#schema_details)

#### 404

Schema with that ID not found in database [](#)

</div>

---

<div class="method">

<span id="apiUserPost"></span>

<div class="method-path">

```post
post /api/user
```

</div>

<div class="method-summary">

Register a new user (<span class="nickname">apiUserPost</span>)

</div>

<div class="method-notes">

Register a new user

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_post](#user_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

Object

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 201

User successfully created [Object](#Object)

#### 400

Bad Request [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiUserUserDelete"></span>

<div class="method-path">

```delete
delete /api/user/{user}
```

</div>

<div class="method-summary">

Delete a User (<span class="nickname">apiUserUserDelete</span>)

</div>

<div class="method-notes">

Delete a User

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserGet"></span>

<div class="method-path">

```get
get /api/user/{user}
```

</div>

<div class="method-summary">

Retrieve a user (<span class="nickname">apiUserUserGet</span>)

</div>

<div class="method-notes">

Retrieve a user

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiUserUserPut"></span>

<div class="method-path">

```put
put /api/user/{user}
```

</div>

<div class="method-summary">

Update a User (at least one of the properties must be provided)
(<span class="nickname">apiUserUserPut</span>)

</div>

<div class="method-notes">

Update a User (at least one of the properties must be provided)

</div>

### Path parameters

<div class="field-items">

<div class="param">

user (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a user. \&quot;me\&quot; may be used as shorthand for the
current user.

</div>

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [user_put](#user_put) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[user](#user)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletGet"></span>

<div class="method-path">

```get
get /api/wallet
```

</div>

<div class="method-summary">

List all wallets of user (<span class="nickname">apiWalletGet</span>)

</div>

<div class="method-notes">

List all wallets of user

</div>

### Return type

<div class="return-type">

array\[[wallet](#wallet)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletPost"></span>

<div class="method-path">

```post
post /api/wallet
```

</div>

<div class="method-summary">

Create a new Wallet (optionally with given name and settings)
(<span class="nickname">apiWalletPost</span>)

</div>

<div class="method-notes">

Create a new Wallet (optionally with given name and settings)

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [wallet_post](#wallet_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/
```

</div>

<div class="method-summary">

List connections/pairwises stored in wallet
(<span class="nickname">apiWalletWalletConnectionGet</span>)

</div>

<div class="method-notes">

List connections/pairwises stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

array\[[pairwise](#pairwise)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionTheirDidGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

</div>

<div class="method-summary">

Retrieve connection/pairwise stored in wallet
(<span class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

</div>

<div class="method-notes">

Retrieve connection/pairwise stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

<div class="param">

theirDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

</div>

</div>

### Return type

<div class="return-type">

[pairwise](#pairwise)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletDelete"></span>

<div class="method-path">

```delete
delete /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

</div>

<div class="method-notes">

Delete a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

</div>

<div class="method-notes">

Retrieve a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

# <span id="Wallet">Wallet</span>

<div class="method">

<span id="apiWalletGet"></span>

<div class="method-path">

```get
get /api/wallet
```

</div>

<div class="method-summary">

List all wallets of user (<span class="nickname">apiWalletGet</span>)

</div>

<div class="method-notes">

List all wallets of user

</div>

### Return type

<div class="return-type">

array\[[wallet](#wallet)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletPost"></span>

<div class="method-path">

```post
post /api/wallet
```

</div>

<div class="method-summary">

Create a new Wallet (optionally with given name and settings)
(<span class="nickname">apiWalletPost</span>)

</div>

<div class="method-notes">

Create a new Wallet (optionally with given name and settings)

</div>

### Consumes

This API call consumes the following media types via the
<span class="header">Content-Type</span> request header:

-   `application/json`

### Request body

<div class="field-items">

<div class="param">

body [wallet_post](#wallet_post) (optional)

</div>

<div class="param-desc">

<span class="param-type">Body Parameter</span> —

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/
```

</div>

<div class="method-summary">

List connections/pairwises stored in wallet
(<span class="nickname">apiWalletWalletConnectionGet</span>)

</div>

<div class="method-notes">

List connections/pairwises stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

array\[[pairwise](#pairwise)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletConnectionTheirDidGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/connection/{theirDid}
```

</div>

<div class="method-summary">

Retrieve connection/pairwise stored in wallet
(<span class="nickname">apiWalletWalletConnectionTheirDidGet</span>)

</div>

<div class="method-notes">

Retrieve connection/pairwise stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

<div class="param">

theirDid (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — Their pairwise
connection did

</div>

</div>

### Return type

<div class="return-type">

[pairwise](#pairwise)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [pairwise](#pairwise)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletCredentialCredentialGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/credential/{credential}
```

</div>

<div class="method-summary">

Retrieve credential stored in wallet
(<span class="nickname">apiWalletWalletCredentialCredentialGet</span>)

</div>

<div class="method-notes">

Retrieve credential stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

<div class="param">

credential (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a credential

</div>

</div>

### Return type

<div class="return-type">

[indy_credential](#indy_credential)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 200

Success [indy_credential](#indy_credential)

</div>

---

<div class="method">

<span id="apiWalletWalletCredentialGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}/credential/
```

</div>

<div class="method-summary">

List credentials stored in wallet
(<span class="nickname">apiWalletWalletCredentialGet</span>)

</div>

<div class="method-notes">

List credentials stored in wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Query parameters

<div class="field-items">

<div class="param">

schema_id (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional) schema_id
to filter credentials

</div>

<div class="param">

schema_issuer_did (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
schema_issuer_did to filter credentials

</div>

<div class="param">

schema_name (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
schema_name to filter credentials

</div>

<div class="param">

schema_version (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
schema_version to filter credentials

</div>

<div class="param">

issuer_did (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional) issuer_did
to filter credentials

</div>

<div class="param">

cred_def_id (optional)

</div>

<div class="param-desc">

<span class="param-type">Query Parameter</span> — (Optional)
cred_def_id to filter credentials

</div>

</div>

### Return type

<div class="return-type">

array\[[indy_credential](#indy_credential)\]

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

---

<div class="method">

<span id="apiWalletWalletDelete"></span>

<div class="method-path">

```delete
delete /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Delete a Wallet (<span class="nickname">apiWalletWalletDelete</span>)

</div>

<div class="method-notes">

Delete a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
header.

-   `application/json`

### Responses

#### 204

Success - but no content [](#)

#### 401

Unauthorized [](#)

#### 404

Not Found [error_message](#error_message)

</div>

---

<div class="method">

<span id="apiWalletWalletGet"></span>

<div class="method-path">

```get
get /api/wallet/{wallet}
```

</div>

<div class="method-summary">

Retrieve a Wallet (<span class="nickname">apiWalletWalletGet</span>)

</div>

<div class="method-notes">

Retrieve a Wallet

</div>

### Path parameters

<div class="field-items">

<div class="param">

wallet (required)

</div>

<div class="param-desc">

<span class="param-type">Path Parameter</span> — A unique id value
identifying a wallet. \&quot;default\&quot; may be used as shorthand for
the current user's default wallet.

</div>

</div>

### Return type

<div class="return-type">

[wallet](#wallet)

</div>

### Produces

This API call produces the following media types according to the
<span class="header">Accept</span> request header; the media type will
be conveyed by the <span class="header">Content-Type</span> response
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

</div>

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

<div class="model">

### <span id="connection_offer">`connection_offer`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/connection_offer

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message
(optional)

</div>

<div class="param-desc">

<span class="param-type">[\#/message_formats/connection_offer](##/message_formats/connection_offer)</span>

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata

</div>

</div>

</div>

<div class="model">

### <span id="connection_request">`connection_request`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/connection_request

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message
(optional)

</div>

<div class="param-desc">

<span class="param-type">[\#/message_formats/connection_request](##/message_formats/connection_request)</span>

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata

</div>

</div>

</div>

<div class="model">

### <span id="connection_response">`connection_response`</span>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="connectionoffer_post">`connectionoffer_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

endpoint (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Response
endpoint for connection response - my endpoint

</div>

<div class="param">

role (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Role
offered to the connection invitee

</div>

<div class="param-enum-header">

Enum:

</div>

<div class="param-enum">

NONE

</div>

<div class="param-enum">

TRUSTEE

</div>

<div class="param-enum">

STEWARD

</div>

<div class="param-enum">

TRUST_ANCHOR

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> (Optional) Additional
data to store in the offer (and later in the pairwise), e.g. citizen id
but not send with the offer

</div>

<div class="param">

data (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> (Optional) Additional
data like name, logo, description, to send with the connection offer

</div>

</div>

</div>

<div class="model">

### <span id="connectionrequest_post">`connectionrequest_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

endpoint (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Response
endpoint for connection response - my endpoint

</div>

<div class="param">

theirDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Their
(endpoint) did, required if there is no connection offer

</div>

<div class="param">

theirVk (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Their
(endpoint) did verification key, required if there is no connection
offer or verkey not on ledger.

</div>

<div class="param">

theirEndpoint (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Their
endpoint address, required if no there is no connection offer or address
not on ledger.

</div>

<div class="param">

connectionOffer (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> (Optional) A
connection offer object

</div>

</div>

</div>

<div class="model">

### <span id="connectionresponse_post">`connectionresponse_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

connectionRequestId

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A unique string value
identifying the connection request to respond to

</div>

</div>

</div>

<div class="model">

### <span id="createdAt">`createdAt`</span>

<div class="model-description">

Creation Time

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="credential_definition">`credential_definition`</span>

<div class="field-items">

<div class="param">

created (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

credDefId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential Definition
Id

</div>

<div class="param">

revocRegId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Revocation
Registry Id

</div>

<div class="param">

revocRegType (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Revocation
Registry Type

</div>

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Owner Wallet id

</div>

<div class="param">

data
(optional)

</div>

<div class="param-desc">

<span class="param-type">[indy_credential_definition](#indy_credential_definition)</span>

</div>

</div>

</div>

<div class="model">

### <span id="credential_message">`credential_message`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/credential

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message
(optional)

</div>

<div class="param-desc">

<span class="param-type">[\#/message_formats/credential](##/message_formats/credential)</span>

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata

</div>

</div>

</div>

<div class="model">

### <span id="credential_offer">`credential_offer`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/credential_offer

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message
(optional)

</div>

<div class="param-desc">

<span class="param-type">[\#/message_formats/credential_offer](##/message_formats/credential_offer)</span>

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata

</div>

</div>

</div>

<div class="model">

### <span id="credential_post">`credential_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

credentialRequestId

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential Request
\_id as stored in API

</div>

<div class="param">

values

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Object containing
attributes defined in schema as key-value pairs (e.g.
{\&quot;attrName\&quot;:\&quot;attrValue\&quot;,
\&quot;attrName1\&quot;:\&quot;attrValue1\&quot;})

</div>

</div>

</div>

<div class="model">

### <span id="credential_request">`credential_request`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/credential_request

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message
(optional)

</div>

<div class="param-desc">

<span class="param-type">[\#/message_formats/credential_request](##/message_formats/credential_request)</span>

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Credential request
metadata JSON as created by indy-sdk

</div>

</div>

</div>

<div class="model">

### <span id="credentialdef_post">`credentialdef_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

schemaId

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A unique string value
identifying a schema

</div>

<div class="param">

tag (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A string value
identifying credential definition uniquely within given schema

</div>

<div class="param">

supportRevocation (optional)

</div>

<div class="param-desc">

<span class="param-type">[Boolean](#boolean)</span> (Optional) States if
revocation should be supported for this credential definiton

</div>

</div>

</div>

<div class="model">

### <span id="credentialoffer_post">`credentialoffer_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

recipientDid

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> DID for whom to create
a credential offer

</div>

<div class="param">

credDefId

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential definition
id

</div>

<div class="param">

credentialLocation (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) URL at
which key-value object containing credential values can be fetched using
HTTP GET

</div>

</div>

</div>

<div class="model">

### <span id="credentialrequest_post">`credentialrequest_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

credentialOfferId

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> credentialoffer \_id
as stored in API

</div>

</div>

</div>

<div class="model">

### <span id="error_message">`error_message`</span>

<div class="field-items">

<div class="param">

message (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Informational Message

</div>

</div>

</div>

<div class="model">

### <span id="expireAt">`expireAt`</span>

<div class="model-description">

Optional expire time

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="id">`id`</span>

<div class="model-description">

A uniquely identifying string value

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="indy_credential">`indy_credential`</span>

<div class="model-description">

Credential as created by indy-sdk, fields may vary

</div>

<div class="field-items">

<div class="param">

referent (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential Id as
stored in wallet

</div>

<div class="param">

schema_id (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Id

</div>

<div class="param">

cred_def_id (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential Definition
Id

</div>

<div class="param">

rev_reg_def_id (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Revocation
Registry Definition Id, if revocable

</div>

<div class="param">

values (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Credential Values

</div>

<div class="param">

signature (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Signature

</div>

<div class="param">

signature_correctness_proof (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Signature Correctness
Proof

</div>

</div>

</div>

<div class="model">

### <span id="indy_credential_definition">`indy_credential_definition`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

schemaId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Id

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential Definition
Type

</div>

<div class="param">

tag (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential Definition
Tag

</div>

<div class="param">

value (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span>

</div>

<div class="param">

ver (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Credential Definition
Version

</div>

</div>

</div>

<div class="model">

### <span id="indy_nym">`indy_nym`</span>

<div class="model-description">

Indy NYM transaction

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="indy_nym_result">`indy_nym_result`</span>

<div class="model-description">

Indy NYM Result

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="indy_post">`indy_post`</span>

<div class="field-items">

<div class="param">

message

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Anoncrypted-message

</div>

</div>

</div>

<div class="model">

### <span id="indy_schema">`indy_schema`</span>

<div class="model-description">

Schema as created by indy-sdk and stored on the ledger

</div>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Id

</div>

<div class="param">

attrNames (optional)

</div>

<div class="param-desc">

<span class="param-type">[array\[String\]](#string)</span>

</div>

<div class="param">

name (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Name

</div>

<div class="param">

version (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Version

</div>

<div class="param">

ver (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema JSON Version

</div>

</div>

</div>

<div class="model">

### <span id="indy_schema_db">`indy_schema_db`</span>

<div class="model-description">

Indy low-level schema as stored in DB

</div>

<div class="field-items">

<div class="param">

name (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Name

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

attrNames (optional)

</div>

<div class="param-desc">

<span class="param-type">[array\[String\]](#string)</span>

</div>

<div class="param">

version (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Version

</div>

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Owner Wallet Id

</div>

<div class="param">

schemaId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Id

</div>

<div class="param">

data (optional)

</div>

<div class="param-desc">

<span class="param-type">[indy_schema](#indy_schema)</span>

</div>

</div>

</div>

<div class="model">

### <span id="indy_transaction">`indy_transaction`</span>

<div class="model-description">

Indy Transaction as retrieved from ledger

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="indyschema_post">`indyschema_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

name

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A unique name of the
schema

</div>

<div class="param">

version

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> version for schema

</div>

<div class="param">

attrNames

</div>

<div class="param-desc">

<span class="param-type">[array\[String\]](#string)</span> list of
attribute names put into the schema

</div>

</div>

</div>

<div class="model">

### <span id="login_post">`login_post`</span>

<div class="field-items">

<div class="param">

username

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>

</div>

<div class="param">

password

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>

</div>

</div>

</div>

<div class="model">

### <span id="messageId">`messageId`</span>

<div class="model-description">

Sent message id, could be a nonce depending on message format

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="messageType">`messageType`</span>

<div class="model-description">

Message Type

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="message_db">`message_db`</span>

<div class="model-description">

Message Object as stored in DB

</div>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageType](#messageType)</span>

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Message which is sent
to recipient, see message_formats

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata

</div>

</div>

</div>

<div class="model">

### <span id="message_post">`message_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

did

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Recipient DID

</div>

<div class="param">

message

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> authcrypted,
base64-encoded message to send

</div>

</div>

</div>

<div class="model">

### <span id="nym_post">`nym_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

did

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Did to write on the
ledger

</div>

<div class="param">

verkey

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Verkey of did to write
on the ledger

</div>

<div class="param">

alias (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Alias of
did to write on the ledger

</div>

<div class="param">

role (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) role of did
to write on the ledger (default = NONE)

</div>

<div class="param-enum-header">

Enum:

</div>

<div class="param-enum">

NONE

</div>

<div class="param-enum">

TRUSTEE

</div>

<div class="param-enum">

STEWARD

</div>

<div class="param-enum">

TRUST_ANCHOR

</div>

</div>

</div>

<div class="model">

### <span id="pairwise">`pairwise`</span>

<div class="field-items">

<div class="param">

myDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> My pairwise DID

</div>

<div class="param">

theirDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Their pairwise DID

</div>

<div class="param">

metadata (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata,
may include other things

</div>

</div>

</div>

<div class="model">

### <span id="proof">`proof`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Recipient wallet Id

</div>

<div class="param">

did (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Proof Sender/Prover
Pairwise Did

</div>

<div class="param">

proof (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Proof as created by
indy-sdk and sent by prover

</div>

<div class="param">

status (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Proof status (pending
or received)

</div>

<div class="param-enum-header">

Enum:

</div>

<div class="param-enum">

pending

</div>

<div class="param-enum">

received

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata

</div>

<div class="param">

isValid (optional)

</div>

<div class="param-desc">

<span class="param-type">[Boolean](#boolean)</span> Whether proof is
valid or not

</div>

</div>

</div>

<div class="model">

### <span id="proof_message">`proof_message`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/proof

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message
(optional)

</div>

<div class="param-desc">

<span class="param-type">[\#/message_formats/proof](##/message_formats/proof)</span>

</div>

</div>

</div>

<div class="model">

### <span id="proof_post">`proof_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

proofRequestId

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> proof request \_id

</div>

<div class="param">

values (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> (Optional) Object
containing self-attested-attributes as key-value pairs

</div>

</div>

</div>

<div class="model">

### <span id="proofrequest_message">`proofrequest_message`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[id](#id)</span>

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

expireAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[expireAt](#expireAt)</span>

</div>

<div class="param">

messageId (optional)

</div>

<div class="param-desc">

<span class="param-type">[messageId](#messageId)</span>

</div>

<div class="param">

type (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>
urn:sovrin:agent:message_type:sovrin.org/proof_request

</div>

<div class="param">

senderDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[senderDid](#senderDid)</span>

</div>

<div class="param">

recipientDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[recipientDid](#recipientDid)</span>

</div>

<div class="param">

message
(optional)

</div>

<div class="param-desc">

<span class="param-type">[\#/message_formats/proof_request](##/message_formats/proof_request)</span>

</div>

<div class="param">

meta (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Additional Metadata

</div>

</div>

</div>

<div class="model">

### <span id="proofrequest_post">`proofrequest_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

recipientDid

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> DID for whom to create
a proof request

</div>

<div class="param">

proofRequest

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> proof request template
\_id or proof request object (see
https://github.com/hyperledger/indy-sdk/blob/master/doc/getting-started/getting-started.md\#apply-for-a-job)

</div>

<div class="param">

templateValues (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> values to use for
rendering the proof request template as key-value object

</div>

</div>

</div>

<div class="model">

### <span id="proofrequest_template">`proofrequest_template`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Owner wallet Id

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[createdAt](#createdAt)</span>

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[updatedAt](#updatedAt)</span>

</div>

<div class="param">

template (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Proof request
mustachejs template
string

</div>

</div>

</div>

<div class="model">

### <span id="proofrequest_template_post">`proofrequest_template_post`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

<div class="param">

template

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> proof request template
(optionally with mustache
placeholders)

</div>

</div>

</div>

<div class="model">

### <span id="proofrequest_template_put">`proofrequest_template_put`</span>

<div class="field-items">

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[wallet](#wallet)</span>

</div>

<div class="param">

template

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> proof request template
(optionally with mustache placeholders)

</div>

</div>

</div>

<div class="model">

### <span id="recipientDid">`recipientDid`</span>

<div class="model-description">

Recipient Did

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="schema_details">`schema_details`</span>

<div class="field-items">

<div class="param">

name

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A unique name for the
schema

</div>

<div class="param">

version

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema version

</div>

<div class="param">

parentSchemaId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Id of the
parent

</div>

<div class="param">

createCredentialDefinition (optional)

</div>

<div class="param-desc">

<span class="param-type">[Boolean](#boolean)</span>

</div>

<div class="param">

isRevocable (optional)

</div>

<div class="param-desc">

<span class="param-type">[Boolean](#boolean)</span> Flag to define if
credentials issued with this schema could be revoked. If true it will
generate one or multiple Revocation Registries.

</div>

<div class="param">

attributes

</div>

<div class="param-desc">

<span class="param-type">[array\[Object\]](#object)</span> List of
attribute names put into the schema

</div>

<div class="param">

isDeprecated (optional)

</div>

<div class="param-desc">

<span class="param-type">[Boolean](#boolean)</span>

</div>

<div class="param">

lowLevelSchema (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span>

</div>

<div class="param">

credentialDefinitionId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>

</div>

<div class="param">

revocationRegistryId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>

</div>

</div>

</div>

<div class="model">

### <span id="schema_post">`schema_post`</span>

<div class="field-items">

<div class="param">

name

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A unique name for the
schema

</div>

<div class="param">

version

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema version

</div>

<div class="param">

parentSchemaId (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Schema Id of the
parent

</div>

<div class="param">

createCredentialDefinition (optional)

</div>

<div class="param-desc">

<span class="param-type">[Boolean](#boolean)</span>

</div>

<div class="param">

isRevocable (optional)

</div>

<div class="param-desc">

<span class="param-type">[Boolean](#boolean)</span> Flag to define if
credentials issued with this schema could be revoked. If true it will
generate one or multiple Revocation Registries.

</div>

<div class="param">

attributes

</div>

<div class="param-desc">

<span class="param-type">[array\[Object\]](#object)</span> List of
attribute names put into the schema

</div>

</div>

</div>

<div class="model">

### <span id="senderDid">`senderDid`</span>

<div class="model-description">

Sender Did

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="updatedAt">`updatedAt`</span>

<div class="model-description">

Last update time

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="user">`user`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A unique string value
identifying a user

</div>

<div class="param">

username (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Username

</div>

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Id of user's current
default wallet

</div>

</div>

</div>

<div class="model">

### <span id="user_post">`user_post`</span>

<div class="field-items">

<div class="param">

username

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>

</div>

<div class="param">

password

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span>

</div>

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[wallet_post](#wallet_post)</span>

</div>

</div>

</div>

<div class="model">

### <span id="user_put">`user_put`</span>

<div class="field-items">

<div class="param">

username (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) New
username

</div>

<div class="param">

password (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) New
password

</div>

<div class="param">

wallet (optional)

</div>

<div class="param-desc">

<span class="param-type">[walletId](#walletId)</span>

</div>

</div>

</div>

<div class="model">

### <span id="wallet">`wallet`</span>

<div class="field-items">

<div class="param">

id (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> A unique string value
identifying a wallet

</div>

<div class="param">

createdAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> wallet creation time

</div>

<div class="param">

updatedAt (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> wallet update time

</div>

<div class="param">

owner (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Wallet Owner User Id

</div>

<div class="param">

users (optional)

</div>

<div class="param-desc">

<span class="param-type">[array\[String\]](#string)</span> Array of user
Ids which are allowed to use this wallet

</div>

<div class="param">

credentials (optional)

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span>

</div>

<div class="param">

ownDid (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> Wallet primary did

</div>

</div>

</div>

<div class="model">

### <span id="walletId">`walletId`</span>

<div class="model-description">

(Optional) A unique id value identifying a wallet

</div>

<div class="field-items">

</div>

</div>

<div class="model">

### <span id="wallet_post">`wallet_post`</span>

<div class="field-items">

<div class="param">

name (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Wallet
name, must be globally unique. Automatically generated if none is
provided.

</div>

<div class="param">

credentials

</div>

<div class="param-desc">

<span class="param-type">[Object](#object)</span> Wallet Credentials
JSON. Supported keys vary by wallet type. A default config will be used
if none is provided.

</div>

<div class="param">

seed (optional)

</div>

<div class="param-desc">

<span class="param-type">[String](#string)</span> (Optional) Seed to use
for initial did creation.

</div>

</div>

</div>
