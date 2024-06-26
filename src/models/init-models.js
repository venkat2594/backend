var DataTypes = require("sequelize").DataTypes;
var _cam_application = require("./cam_application");
var _cam_bank_analysis = require("./cam_bank_analysis");
var _cam_bureau_analysis = require("./cam_bureau_analysis");
var _cam_configuration = require("./cam_configuration");
var _core_activity = require("./core_activity");
var _core_ask = require("./core_ask");
var _core_ask_summary = require("./core_ask_summary");
var _core_bank = require("./core_bank");
var _core_channel = require("./core_channel");
var _core_channel_employee_map = require("./core_channel_employee_map");
var _core_channel_lender = require("./core_channel_lender");
var _core_channel_loan_type = require("./core_channel_loan_type");
var _core_channel_territory = require("./core_channel_territory");
var _core_channel_user = require("./core_channel_user");
var _core_channel_user_hierarchy = require("./core_channel_user_hierarchy");
var _core_checklist = require("./core_checklist");
var _core_checklist_item = require("./core_checklist_item");
var _core_city = require("./core_city");
var _core_city_tier = require("./core_city_tier");
var _core_country = require("./core_country");
var _core_customer = require("./core_customer");
var _core_document = require("./core_document");
var _core_document_class = require("./core_document_class");
var _core_employee = require("./core_employee");
var _core_employee_hierarchy = require("./core_employee_hierarchy");
var _core_fcm_token = require("./core_fcm_token");
var _core_guest = require("./core_guest");
var _core_industry_product = require("./core_industry_product");
var _core_industry_type = require("./core_industry_type");
var _core_journey_type = require("./core_journey_type");
var _core_lender = require("./core_lender");
var _core_lender_contract = require("./core_lender_contract");
var _core_lender_eligible_pincode = require("./core_lender_eligible_pincode");
var _core_lender_loan_type = require("./core_lender_loan_type");
var _core_lender_offer_rule = require("./core_lender_offer_rule");
var _core_lender_pincode_upload = require("./core_lender_pincode_upload");
var _core_lender_scheme = require("./core_lender_scheme");
var _core_lender_scheme_charge = require("./core_lender_scheme_charge");
var _core_loan_type = require("./core_loan_type");
var _core_lookup_master = require("./core_lookup_master");
var _core_module = require("./core_module");
var _core_note = require("./core_note");
var _core_notification = require("./core_notification");
var _core_office = require("./core_office");
var _core_parameter_associate = require("./core_parameter_associate");
var _core_pincode = require("./core_pincode");
var _core_product = require("./core_product");
var _core_report_request = require("./core_report_request");
var _core_role_module_map = require("./core_role_module_map");
var _core_role_privilege = require("./core_role_privilege");
var _core_rule = require("./core_rule");
var _core_rule_category = require("./core_rule_category");
var _core_rule_execution = require("./core_rule_execution");
var _core_rule_parameter = require("./core_rule_parameter");
var _core_service_provider = require("./core_service_provider");
var _core_state = require("./core_state");
var _core_step_notification = require("./core_step_notification");
var _core_sub_loan_type = require("./core_sub_loan_type");
var _core_task = require("./core_task");
var _core_template = require("./core_template");
var _core_territory = require("./core_territory");
var _core_territory_type = require("./core_territory_type");
var _core_ui_component = require("./core_ui_component");
var _core_url_shortener = require("./core_url_shortener");
var _core_user = require("./core_user");
var _core_user_credential_request = require("./core_user_credential_request");
var _core_user_login_activity = require("./core_user_login_activity");
var _core_user_notification = require("./core_user_notification");
var _core_user_role = require("./core_user_role");
var _core_user_role_map = require("./core_user_role_map");
var _core_user_territory = require("./core_user_territory");
var _core_user_territory_lender = require("./core_user_territory_lender");
var _core_user_territory_loan_type = require("./core_user_territory_loan_type");
var _core_user_territory_loan_type_scope = require("./core_user_territory_loan_type_scope");
var _core_workflow = require("./core_workflow");
var _core_workflow_component = require("./core_workflow_component");
var _core_workflow_instance = require("./core_workflow_instance");
var _core_workflow_stage = require("./core_workflow_stage");
var _core_workflow_step = require("./core_workflow_step");
var _crm_contact = require("./crm_contact");
var _crm_lead = require("./crm_lead");
var _crm_lead_participant = require("./crm_lead_participant");
var _fin_estimate_earning = require("./fin_estimate_earning");
var _fin_invoice = require("./fin_invoice");
var _fin_invoice_item = require("./fin_invoice_item");
var _fin_parent_category = require("./fin_parent_category");
var _fin_payout_dump_invoice = require("./fin_payout_dump_invoice");
var _fin_payout_dump_upload = require("./fin_payout_dump_upload");
var _fin_scheme = require("./fin_scheme");
var _fin_scheme_group = require("./fin_scheme_group");
var _fin_scheme_group_channel_map = require("./fin_scheme_group_channel_map");
var _fin_scheme_group_map = require("./fin_scheme_group_map");
var _lcs_collection = require("./lcs_collection");
var _lcs_collection_upload = require("./lcs_collection_upload");
var _lcs_collection_upload_map = require("./lcs_collection_upload_map");
var _lms_loan_account = require("./lms_loan_account");
var _lms_loan_applicant = require("./lms_loan_applicant");
var _lms_loan_applicant_address = require("./lms_loan_applicant_address");
var _lms_loan_disbursement = require("./lms_loan_disbursement");
var _lms_loan_payment = require("./lms_loan_payment");
var _lms_loan_property = require("./lms_loan_property");
var _lms_loan_repayment = require("./lms_loan_repayment");
var _lms_loan_vehicle_details = require("./lms_loan_vehicle_details");
var _los_appeal = require("./los_appeal");
var _los_application = require("./los_application");
var _los_application_document = require("./los_application_document");
var _los_application_lender_apply = require("./los_application_lender_apply");
var _los_application_loan = require("./los_application_loan");
var _los_application_participant = require("./los_application_participant");
var _los_application_property = require("./los_application_property");
var _los_applied_rule = require("./los_applied_rule");
var _los_charge_and_fees = require("./los_charge_and_fees");
var _los_computed_offer = require("./los_computed_offer");
var _los_disbursement_bank_account = require("./los_disbursement_bank_account");
var _los_elimination_rule = require("./los_elimination_rule");
var _los_offer = require("./los_offer");
var _los_offer_rule = require("./los_offer_rule");
var _los_repayment_schedule = require("./los_repayment_schedule");
var _los_vehicle_details = require("./los_vehicle_details");
var _onb_address = require("./onb_address");
var _onb_application = require("./onb_application");
var _onb_bank_account = require("./onb_bank_account");
var _onb_dedupe = require("./onb_dedupe");
var _onb_document = require("./onb_document");
var _onb_entity = require("./onb_entity");
var _onb_entity_user = require("./onb_entity_user");
var _onb_income = require("./onb_income");
var _onb_person = require("./onb_person");
var _onb_person_work = require("./onb_person_work");
var _onb_reference = require("./onb_reference");
var _tenant_configuration = require("./tenant_configuration");
var _tenant_system = require("./tenant_system");
var _ver_attempt = require("./ver_attempt");
var _ver_person_met = require("./ver_person_met");
var _ver_verification = require("./ver_verification");
var _ver_verification_activity = require("./ver_verification_activity");
var _ver_verification_category = require("./ver_verification_category");
var _ver_verification_category_questions = require("./ver_verification_category_questions");
var _ver_verification_category_rule = require("./ver_verification_category_rule");
var _ver_verification_file = require("./ver_verification_file");

function initModels(sequelize) {
  var cam_application = _cam_application(sequelize, DataTypes);
  var cam_bank_analysis = _cam_bank_analysis(sequelize, DataTypes);
  var cam_bureau_analysis = _cam_bureau_analysis(sequelize, DataTypes);
  var cam_configuration = _cam_configuration(sequelize, DataTypes);
  var core_activity = _core_activity(sequelize, DataTypes);
  var core_ask = _core_ask(sequelize, DataTypes);
  var core_ask_summary = _core_ask_summary(sequelize, DataTypes);
  var core_bank = _core_bank(sequelize, DataTypes);
  var core_channel = _core_channel(sequelize, DataTypes);
  var core_channel_employee_map = _core_channel_employee_map(sequelize, DataTypes);
  var core_channel_lender = _core_channel_lender(sequelize, DataTypes);
  var core_channel_loan_type = _core_channel_loan_type(sequelize, DataTypes);
  var core_channel_territory = _core_channel_territory(sequelize, DataTypes);
  var core_channel_user = _core_channel_user(sequelize, DataTypes);
  var core_channel_user_hierarchy = _core_channel_user_hierarchy(sequelize, DataTypes);
  var core_checklist = _core_checklist(sequelize, DataTypes);
  var core_checklist_item = _core_checklist_item(sequelize, DataTypes);
  var core_city = _core_city(sequelize, DataTypes);
  var core_city_tier = _core_city_tier(sequelize, DataTypes);
  var core_country = _core_country(sequelize, DataTypes);
  var core_customer = _core_customer(sequelize, DataTypes);
  var core_document = _core_document(sequelize, DataTypes);
  var core_document_class = _core_document_class(sequelize, DataTypes);
  var core_employee = _core_employee(sequelize, DataTypes);
  var core_employee_hierarchy = _core_employee_hierarchy(sequelize, DataTypes);
  var core_fcm_token = _core_fcm_token(sequelize, DataTypes);
  var core_guest = _core_guest(sequelize, DataTypes);
  var core_industry_product = _core_industry_product(sequelize, DataTypes);
  var core_industry_type = _core_industry_type(sequelize, DataTypes);
  var core_journey_type = _core_journey_type(sequelize, DataTypes);
  var core_lender = _core_lender(sequelize, DataTypes);
  var core_lender_contract = _core_lender_contract(sequelize, DataTypes);
  var core_lender_eligible_pincode = _core_lender_eligible_pincode(sequelize, DataTypes);
  var core_lender_loan_type = _core_lender_loan_type(sequelize, DataTypes);
  var core_lender_offer_rule = _core_lender_offer_rule(sequelize, DataTypes);
  var core_lender_pincode_upload = _core_lender_pincode_upload(sequelize, DataTypes);
  var core_lender_scheme = _core_lender_scheme(sequelize, DataTypes);
  var core_lender_scheme_charge = _core_lender_scheme_charge(sequelize, DataTypes);
  var core_loan_type = _core_loan_type(sequelize, DataTypes);
  var core_lookup_master = _core_lookup_master(sequelize, DataTypes);
  var core_module = _core_module(sequelize, DataTypes);
  var core_note = _core_note(sequelize, DataTypes);
  var core_notification = _core_notification(sequelize, DataTypes);
  var core_office = _core_office(sequelize, DataTypes);
  var core_parameter_associate = _core_parameter_associate(sequelize, DataTypes);
  var core_pincode = _core_pincode(sequelize, DataTypes);
  var core_product = _core_product(sequelize, DataTypes);
  var core_report_request = _core_report_request(sequelize, DataTypes);
  var core_role_module_map = _core_role_module_map(sequelize, DataTypes);
  var core_role_privilege = _core_role_privilege(sequelize, DataTypes);
  var core_rule = _core_rule(sequelize, DataTypes);
  var core_rule_category = _core_rule_category(sequelize, DataTypes);
  var core_rule_execution = _core_rule_execution(sequelize, DataTypes);
  var core_rule_parameter = _core_rule_parameter(sequelize, DataTypes);
  var core_service_provider = _core_service_provider(sequelize, DataTypes);
  var core_state = _core_state(sequelize, DataTypes);
  var core_step_notification = _core_step_notification(sequelize, DataTypes);
  var core_sub_loan_type = _core_sub_loan_type(sequelize, DataTypes);
  var core_task = _core_task(sequelize, DataTypes);
  var core_template = _core_template(sequelize, DataTypes);
  var core_territory = _core_territory(sequelize, DataTypes);
  var core_territory_type = _core_territory_type(sequelize, DataTypes);
  var core_ui_component = _core_ui_component(sequelize, DataTypes);
  var core_url_shortener = _core_url_shortener(sequelize, DataTypes);
  var core_user = _core_user(sequelize, DataTypes);
  var core_user_credential_request = _core_user_credential_request(sequelize, DataTypes);
  var core_user_login_activity = _core_user_login_activity(sequelize, DataTypes);
  var core_user_notification = _core_user_notification(sequelize, DataTypes);
  var core_user_role = _core_user_role(sequelize, DataTypes);
  var core_user_role_map = _core_user_role_map(sequelize, DataTypes);
  var core_user_territory = _core_user_territory(sequelize, DataTypes);
  var core_user_territory_lender = _core_user_territory_lender(sequelize, DataTypes);
  var core_user_territory_loan_type = _core_user_territory_loan_type(sequelize, DataTypes);
  var core_user_territory_loan_type_scope = _core_user_territory_loan_type_scope(sequelize, DataTypes);
  var core_workflow = _core_workflow(sequelize, DataTypes);
  var core_workflow_component = _core_workflow_component(sequelize, DataTypes);
  var core_workflow_instance = _core_workflow_instance(sequelize, DataTypes);
  var core_workflow_stage = _core_workflow_stage(sequelize, DataTypes);
  var core_workflow_step = _core_workflow_step(sequelize, DataTypes);
  var crm_contact = _crm_contact(sequelize, DataTypes);
  var crm_lead = _crm_lead(sequelize, DataTypes);
  var crm_lead_participant = _crm_lead_participant(sequelize, DataTypes);
  var fin_estimate_earning = _fin_estimate_earning(sequelize, DataTypes);
  var fin_invoice = _fin_invoice(sequelize, DataTypes);
  var fin_invoice_item = _fin_invoice_item(sequelize, DataTypes);
  var fin_parent_category = _fin_parent_category(sequelize, DataTypes);
  var fin_payout_dump_invoice = _fin_payout_dump_invoice(sequelize, DataTypes);
  var fin_payout_dump_upload = _fin_payout_dump_upload(sequelize, DataTypes);
  var fin_scheme = _fin_scheme(sequelize, DataTypes);
  var fin_scheme_group = _fin_scheme_group(sequelize, DataTypes);
  var fin_scheme_group_channel_map = _fin_scheme_group_channel_map(sequelize, DataTypes);
  var fin_scheme_group_map = _fin_scheme_group_map(sequelize, DataTypes);
  var lcs_collection = _lcs_collection(sequelize, DataTypes);
  var lcs_collection_upload = _lcs_collection_upload(sequelize, DataTypes);
  var lcs_collection_upload_map = _lcs_collection_upload_map(sequelize, DataTypes);
  var lms_loan_account = _lms_loan_account(sequelize, DataTypes);
  var lms_loan_applicant = _lms_loan_applicant(sequelize, DataTypes);
  var lms_loan_applicant_address = _lms_loan_applicant_address(sequelize, DataTypes);
  var lms_loan_disbursement = _lms_loan_disbursement(sequelize, DataTypes);
  var lms_loan_payment = _lms_loan_payment(sequelize, DataTypes);
  var lms_loan_property = _lms_loan_property(sequelize, DataTypes);
  var lms_loan_repayment = _lms_loan_repayment(sequelize, DataTypes);
  var lms_loan_vehicle_details = _lms_loan_vehicle_details(sequelize, DataTypes);
  var los_appeal = _los_appeal(sequelize, DataTypes);
  var los_application = _los_application(sequelize, DataTypes);
  var los_application_document = _los_application_document(sequelize, DataTypes);
  var los_application_lender_apply = _los_application_lender_apply(sequelize, DataTypes);
  var los_application_loan = _los_application_loan(sequelize, DataTypes);
  var los_application_participant = _los_application_participant(sequelize, DataTypes);
  var los_application_property = _los_application_property(sequelize, DataTypes);
  var los_applied_rule = _los_applied_rule(sequelize, DataTypes);
  var los_charge_and_fees = _los_charge_and_fees(sequelize, DataTypes);
  var los_computed_offer = _los_computed_offer(sequelize, DataTypes);
  var los_disbursement_bank_account = _los_disbursement_bank_account(sequelize, DataTypes);
  var los_elimination_rule = _los_elimination_rule(sequelize, DataTypes);
  var los_offer = _los_offer(sequelize, DataTypes);
  var los_offer_rule = _los_offer_rule(sequelize, DataTypes);
  var los_repayment_schedule = _los_repayment_schedule(sequelize, DataTypes);
  var los_vehicle_details = _los_vehicle_details(sequelize, DataTypes);
  var onb_address = _onb_address(sequelize, DataTypes);
  var onb_application = _onb_application(sequelize, DataTypes);
  var onb_bank_account = _onb_bank_account(sequelize, DataTypes);
  var onb_dedupe = _onb_dedupe(sequelize, DataTypes);
  var onb_document = _onb_document(sequelize, DataTypes);
  var onb_entity = _onb_entity(sequelize, DataTypes);
  var onb_entity_user = _onb_entity_user(sequelize, DataTypes);
  var onb_income = _onb_income(sequelize, DataTypes);
  var onb_person = _onb_person(sequelize, DataTypes);
  var onb_person_work = _onb_person_work(sequelize, DataTypes);
  var onb_reference = _onb_reference(sequelize, DataTypes);
  var tenant_configuration = _tenant_configuration(sequelize, DataTypes);
  var tenant_system = _tenant_system(sequelize, DataTypes);
  var ver_attempt = _ver_attempt(sequelize, DataTypes);
  var ver_person_met = _ver_person_met(sequelize, DataTypes);
  var ver_verification = _ver_verification(sequelize, DataTypes);
  var ver_verification_activity = _ver_verification_activity(sequelize, DataTypes);
  var ver_verification_category = _ver_verification_category(sequelize, DataTypes);
  var ver_verification_category_questions = _ver_verification_category_questions(sequelize, DataTypes);
  var ver_verification_category_rule = _ver_verification_category_rule(sequelize, DataTypes);
  var ver_verification_file = _ver_verification_file(sequelize, DataTypes);

  cam_bank_analysis.belongsTo(cam_application, { as: "application", foreignKey: "application_id"});
  cam_application.hasMany(cam_bank_analysis, { as: "cam_bank_analyses", foreignKey: "application_id"});
  cam_bureau_analysis.belongsTo(cam_application, { as: "application", foreignKey: "application_id"});
  cam_application.hasMany(cam_bureau_analysis, { as: "cam_bureau_analyses", foreignKey: "application_id"});
  core_ask.belongsTo(core_ask, { as: "parent_ask", foreignKey: "parent_ask_id"});
  core_ask.hasMany(core_ask, { as: "core_asks", foreignKey: "parent_ask_id"});
  onb_document.belongsTo(core_ask, { as: "ask", foreignKey: "ask_id"});
  core_ask.hasMany(onb_document, { as: "onb_documents", foreignKey: "ask_id"});
  core_ask.belongsTo(core_ask_summary, { as: "ask_summary", foreignKey: "ask_summary_id"});
  core_ask_summary.hasMany(core_ask, { as: "core_asks", foreignKey: "ask_summary_id"});
  onb_bank_account.belongsTo(core_bank, { as: "bank", foreignKey: "bank_id"});
  core_bank.hasMany(onb_bank_account, { as: "onb_bank_accounts", foreignKey: "bank_id"});
  core_ask.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(core_ask, { as: "core_asks", foreignKey: "channel_id"});
  core_channel_employee_map.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(core_channel_employee_map, { as: "core_channel_employee_maps", foreignKey: "channel_id"});
  core_channel_territory.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(core_channel_territory, { as: "core_channel_territories", foreignKey: "channel_id"});
  core_channel_user.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(core_channel_user, { as: "core_channel_users", foreignKey: "channel_id"});
  core_channel_user_hierarchy.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(core_channel_user_hierarchy, { as: "core_channel_user_hierarchies", foreignKey: "channel_id"});
  fin_estimate_earning.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(fin_estimate_earning, { as: "fin_estimate_earnings", foreignKey: "channel_id"});
  fin_invoice.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "channel_id"});
  fin_scheme_group_channel_map.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(fin_scheme_group_channel_map, { as: "fin_scheme_group_channel_maps", foreignKey: "channel_id"});
  los_application_participant.belongsTo(core_channel, { as: "channel", foreignKey: "channel_id"});
  core_channel.hasMany(los_application_participant, { as: "los_application_participants", foreignKey: "channel_id"});
  core_channel_lender.belongsTo(core_channel_territory, { as: "channel_territory", foreignKey: "channel_territory_id"});
  core_channel_territory.hasMany(core_channel_lender, { as: "core_channel_lenders", foreignKey: "channel_territory_id"});
  core_channel_loan_type.belongsTo(core_channel_territory, { as: "channel_territory", foreignKey: "channel_territory_id"});
  core_channel_territory.hasMany(core_channel_loan_type, { as: "core_channel_loan_types", foreignKey: "channel_territory_id"});
  core_channel_user_hierarchy.belongsTo(core_channel_user, { as: "channel_user", foreignKey: "channel_user_id"});
  core_channel_user.hasMany(core_channel_user_hierarchy, { as: "core_channel_user_hierarchies", foreignKey: "channel_user_id"});
  core_channel_user_hierarchy.belongsTo(core_channel_user, { as: "supervisor", foreignKey: "supervisor_id"});
  core_channel_user.hasMany(core_channel_user_hierarchy, { as: "supervisor_core_channel_user_hierarchies", foreignKey: "supervisor_id"});
  core_checklist_item.belongsTo(core_checklist, { as: "checklist", foreignKey: "checklist_id"});
  core_checklist.hasMany(core_checklist_item, { as: "core_checklist_items", foreignKey: "checklist_id"});
  los_application_document.belongsTo(core_checklist_item, { as: "checklist_item", foreignKey: "checklist_item_id"});
  core_checklist_item.hasMany(los_application_document, { as: "los_application_documents", foreignKey: "checklist_item_id"});
  onb_document.belongsTo(core_checklist_item, { as: "checklist_item", foreignKey: "checklist_item_id"});
  core_checklist_item.hasMany(onb_document, { as: "onb_documents", foreignKey: "checklist_item_id"});
  core_office.belongsTo(core_city, { as: "city", foreignKey: "city_id"});
  core_city.hasMany(core_office, { as: "core_offices", foreignKey: "city_id"});
  core_pincode.belongsTo(core_city, { as: "city", foreignKey: "city_id"});
  core_city.hasMany(core_pincode, { as: "core_pincodes", foreignKey: "city_id"});
  fin_invoice.belongsTo(core_city, { as: "city", foreignKey: "city_id"});
  core_city.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "city_id"});
  fin_invoice.belongsTo(core_city, { as: "from_city", foreignKey: "from_city_id"});
  core_city.hasMany(fin_invoice, { as: "from_city_fin_invoices", foreignKey: "from_city_id"});
  core_city.belongsTo(core_country, { as: "country", foreignKey: "country_id"});
  core_country.hasMany(core_city, { as: "core_cities", foreignKey: "country_id"});
  core_office.belongsTo(core_country, { as: "country", foreignKey: "country_id"});
  core_country.hasMany(core_office, { as: "core_offices", foreignKey: "country_id"});
  core_pincode.belongsTo(core_country, { as: "country", foreignKey: "country_id"});
  core_country.hasMany(core_pincode, { as: "core_pincodes", foreignKey: "country_id"});
  core_state.belongsTo(core_country, { as: "country", foreignKey: "country_id"});
  core_country.hasMany(core_state, { as: "core_states", foreignKey: "country_id"});
  fin_invoice.belongsTo(core_country, { as: "country", foreignKey: "country_id"});
  core_country.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "country_id"});
  fin_invoice.belongsTo(core_country, { as: "from_country", foreignKey: "from_country_id"});
  core_country.hasMany(fin_invoice, { as: "from_country_fin_invoices", foreignKey: "from_country_id"});
  lms_loan_account.belongsTo(core_customer, { as: "customer", foreignKey: "customer_id"});
  core_customer.hasMany(lms_loan_account, { as: "lms_loan_accounts", foreignKey: "customer_id"});
  los_application.belongsTo(core_customer, { as: "customer", foreignKey: "customer_id"});
  core_customer.hasMany(los_application, { as: "los_applications", foreignKey: "customer_id"});
  core_ask.belongsTo(core_document, { as: "document", foreignKey: "document_id"});
  core_document.hasMany(core_ask, { as: "core_asks", foreignKey: "document_id"});
  core_checklist_item.belongsTo(core_document, { as: "document", foreignKey: "document_id"});
  core_document.hasMany(core_checklist_item, { as: "core_checklist_items", foreignKey: "document_id"});
  los_application_document.belongsTo(core_document, { as: "document", foreignKey: "document_id"});
  core_document.hasMany(los_application_document, { as: "los_application_documents", foreignKey: "document_id"});
  onb_document.belongsTo(core_document, { as: "document", foreignKey: "document_id"});
  core_document.hasMany(onb_document, { as: "onb_documents", foreignKey: "document_id"});
  core_checklist_item.belongsTo(core_document_class, { as: "document_class", foreignKey: "document_class_id"});
  core_document_class.hasMany(core_checklist_item, { as: "core_checklist_items", foreignKey: "document_class_id"});
  los_application_document.belongsTo(core_document_class, { as: "document_class", foreignKey: "document_class_id"});
  core_document_class.hasMany(los_application_document, { as: "los_application_documents", foreignKey: "document_class_id"});
  core_channel_employee_map.belongsTo(core_employee, { as: "employee", foreignKey: "employee_id"});
  core_employee.hasMany(core_channel_employee_map, { as: "core_channel_employee_maps", foreignKey: "employee_id"});
  core_channel_user.belongsTo(core_employee, { as: "rm_employee", foreignKey: "rm_employee_id"});
  core_employee.hasMany(core_channel_user, { as: "core_channel_users", foreignKey: "rm_employee_id"});
  core_employee_hierarchy.belongsTo(core_employee, { as: "employee", foreignKey: "employee_id"});
  core_employee.hasMany(core_employee_hierarchy, { as: "core_employee_hierarchies", foreignKey: "employee_id"});
  core_employee_hierarchy.belongsTo(core_employee, { as: "supervisor", foreignKey: "supervisor_id"});
  core_employee.hasMany(core_employee_hierarchy, { as: "supervisor_core_employee_hierarchies", foreignKey: "supervisor_id"});
  fin_estimate_earning.belongsTo(core_employee, { as: "employee", foreignKey: "employee_id"});
  core_employee.hasMany(fin_estimate_earning, { as: "fin_estimate_earnings", foreignKey: "employee_id"});
  fin_invoice.belongsTo(core_employee, { as: "employee", foreignKey: "employee_id"});
  core_employee.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "employee_id"});
  los_appeal.belongsTo(core_employee, { as: "created_by_core_employee", foreignKey: "created_by"});
  core_employee.hasMany(los_appeal, { as: "los_appeals", foreignKey: "created_by"});
  los_appeal.belongsTo(core_employee, { as: "assigned_to_core_employee", foreignKey: "assigned_to"});
  core_employee.hasMany(los_appeal, { as: "assigned_to_los_appeals", foreignKey: "assigned_to"});
  onb_entity.belongsTo(core_industry_product, { as: "industry_product", foreignKey: "industry_product_id"});
  core_industry_product.hasMany(onb_entity, { as: "onb_entities", foreignKey: "industry_product_id"});
  onb_person_work.belongsTo(core_industry_product, { as: "industry_product", foreignKey: "industry_product_id"});
  core_industry_product.hasMany(onb_person_work, { as: "onb_person_works", foreignKey: "industry_product_id"});
  core_industry_product.belongsTo(core_industry_type, { as: "industry_type", foreignKey: "industry_type_id"});
  core_industry_type.hasMany(core_industry_product, { as: "core_industry_products", foreignKey: "industry_type_id"});
  onb_entity.belongsTo(core_industry_type, { as: "industry_type", foreignKey: "industry_type_id"});
  core_industry_type.hasMany(onb_entity, { as: "onb_entities", foreignKey: "industry_type_id"});
  onb_person_work.belongsTo(core_industry_type, { as: "industry_type", foreignKey: "industry_type_id"});
  core_industry_type.hasMany(onb_person_work, { as: "onb_person_works", foreignKey: "industry_type_id"});
  core_ask_summary.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_ask_summary, { as: "core_ask_summaries", foreignKey: "lender_id"});
  core_channel_lender.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasOne(core_channel_lender, { as: "core_channel_lender", foreignKey: "lender_id"});
  core_checklist.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_checklist, { as: "core_checklists", foreignKey: "lender_id"});
  core_lender_contract.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_lender_contract, { as: "core_lender_contracts", foreignKey: "lender_id"});
  core_lender_eligible_pincode.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_lender_eligible_pincode, { as: "core_lender_eligible_pincodes", foreignKey: "lender_id"});
  core_lender_loan_type.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_lender_loan_type, { as: "core_lender_loan_types", foreignKey: "lender_id"});
  core_lender_offer_rule.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_lender_offer_rule, { as: "core_lender_offer_rules", foreignKey: "lender_id"});
  core_lender_pincode_upload.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_lender_pincode_upload, { as: "core_lender_pincode_uploads", foreignKey: "lender_id"});
  core_lender_scheme.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_lender_scheme, { as: "core_lender_schemes", foreignKey: "lender_id"});
  core_rule_category.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_rule_category, { as: "core_rule_categories", foreignKey: "lender_id"});
  core_user_territory_lender.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_user_territory_lender, { as: "core_user_territory_lenders", foreignKey: "lender_id"});
  core_user_territory_loan_type_scope.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(core_user_territory_loan_type_scope, { as: "core_user_territory_loan_type_scopes", foreignKey: "lender_id"});
  fin_estimate_earning.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(fin_estimate_earning, { as: "fin_estimate_earnings", foreignKey: "lender_id"});
  fin_invoice.belongsTo(core_lender, { as: "core_lender", foreignKey: "core_lender_id"});
  core_lender.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "core_lender_id"});
  fin_invoice_item.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(fin_invoice_item, { as: "fin_invoice_items", foreignKey: "lender_id"});
  fin_payout_dump_upload.belongsTo(core_lender, { as: "core_lender", foreignKey: "core_lender_id"});
  core_lender.hasMany(fin_payout_dump_upload, { as: "fin_payout_dump_uploads", foreignKey: "core_lender_id"});
  fin_scheme.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(fin_scheme, { as: "fin_schemes", foreignKey: "lender_id"});
  lcs_collection_upload.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(lcs_collection_upload, { as: "lcs_collection_uploads", foreignKey: "lender_id"});
  lms_loan_account.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(lms_loan_account, { as: "lms_loan_accounts", foreignKey: "lender_id"});
  los_application_lender_apply.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(los_application_lender_apply, { as: "los_application_lender_applies", foreignKey: "lender_id"});
  los_applied_rule.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "lender_id"});
  los_computed_offer.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(los_computed_offer, { as: "los_computed_offers", foreignKey: "lender_id"});
  los_offer.belongsTo(core_lender, { as: "lender", foreignKey: "lender_id"});
  core_lender.hasMany(los_offer, { as: "los_offers", foreignKey: "lender_id"});
  core_lender_offer_rule.belongsTo(core_lender_loan_type, { as: "lender_loan_type", foreignKey: "lender_loan_type_id"});
  core_lender_loan_type.hasMany(core_lender_offer_rule, { as: "core_lender_offer_rules", foreignKey: "lender_loan_type_id"});
  core_rule_category.belongsTo(core_lender_loan_type, { as: "lender_loan_type", foreignKey: "lender_loan_type_id"});
  core_lender_loan_type.hasMany(core_rule_category, { as: "core_rule_categories", foreignKey: "lender_loan_type_id"});
  los_offer_rule.belongsTo(core_lender_offer_rule, { as: "offer_rule", foreignKey: "offer_rule_id"});
  core_lender_offer_rule.hasMany(los_offer_rule, { as: "los_offer_rules", foreignKey: "offer_rule_id"});
  core_lender_eligible_pincode.belongsTo(core_lender_scheme, { as: "lender_scheme", foreignKey: "lender_scheme_id"});
  core_lender_scheme.hasMany(core_lender_eligible_pincode, { as: "core_lender_eligible_pincodes", foreignKey: "lender_scheme_id"});
  core_lender_offer_rule.belongsTo(core_lender_scheme, { as: "lender_scheme", foreignKey: "lender_scheme_id"});
  core_lender_scheme.hasMany(core_lender_offer_rule, { as: "core_lender_offer_rules", foreignKey: "lender_scheme_id"});
  core_lender_pincode_upload.belongsTo(core_lender_scheme, { as: "lender_scheme", foreignKey: "lender_scheme_id"});
  core_lender_scheme.hasMany(core_lender_pincode_upload, { as: "core_lender_pincode_uploads", foreignKey: "lender_scheme_id"});
  core_lender_scheme_charge.belongsTo(core_lender_scheme, { as: "lender_scheme", foreignKey: "lender_scheme_id"});
  core_lender_scheme.hasMany(core_lender_scheme_charge, { as: "core_lender_scheme_charges", foreignKey: "lender_scheme_id"});
  core_rule_category.belongsTo(core_lender_scheme, { as: "lender_scheme", foreignKey: "lender_scheme_id"});
  core_lender_scheme.hasMany(core_rule_category, { as: "core_rule_categories", foreignKey: "lender_scheme_id"});
  los_applied_rule.belongsTo(core_lender_scheme, { as: "lender_scheme", foreignKey: "lender_scheme_id"});
  core_lender_scheme.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "lender_scheme_id"});
  los_computed_offer.belongsTo(core_lender_scheme, { as: "lender_scheme", foreignKey: "lender_scheme_id"});
  core_lender_scheme.hasMany(los_computed_offer, { as: "los_computed_offers", foreignKey: "lender_scheme_id"});
  los_offer.belongsTo(core_lender_scheme, { as: "scheme", foreignKey: "scheme_id"});
  core_lender_scheme.hasMany(los_offer, { as: "los_offers", foreignKey: "scheme_id"});
  cam_configuration.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(cam_configuration, { as: "cam_configurations", foreignKey: "loan_type_id"});
  core_channel_loan_type.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_channel_loan_type, { as: "core_channel_loan_types", foreignKey: "loan_type_id"});
  core_checklist.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_checklist, { as: "core_checklists", foreignKey: "loan_type_id"});
  core_journey_type.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_journey_type, { as: "core_journey_types", foreignKey: "loan_type_id"});
  core_lender_contract.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_lender_contract, { as: "core_lender_contracts", foreignKey: "loan_type_id"});
  core_lender_eligible_pincode.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_lender_eligible_pincode, { as: "core_lender_eligible_pincodes", foreignKey: "loan_type_id"});
  core_lender_loan_type.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_lender_loan_type, { as: "core_lender_loan_types", foreignKey: "loan_type_id"});
  core_lender_pincode_upload.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_lender_pincode_upload, { as: "core_lender_pincode_uploads", foreignKey: "loan_type_id"});
  core_lender_scheme.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_lender_scheme, { as: "core_lender_schemes", foreignKey: "loan_type_id"});
  core_rule_category.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_rule_category, { as: "core_rule_categories", foreignKey: "loan_type_id"});
  core_sub_loan_type.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_sub_loan_type, { as: "core_sub_loan_types", foreignKey: "loan_type_id"});
  core_user_territory_loan_type.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_user_territory_loan_type, { as: "core_user_territory_loan_types", foreignKey: "loan_type_id"});
  core_user_territory_loan_type_scope.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(core_user_territory_loan_type_scope, { as: "core_user_territory_loan_type_scopes", foreignKey: "loan_type_id"});
  fin_estimate_earning.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(fin_estimate_earning, { as: "fin_estimate_earnings", foreignKey: "loan_type_id"});
  fin_invoice.belongsTo(core_loan_type, { as: "core_loan_type", foreignKey: "core_loan_type_id"});
  core_loan_type.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "core_loan_type_id"});
  fin_invoice_item.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(fin_invoice_item, { as: "fin_invoice_items", foreignKey: "loan_type_id"});
  fin_payout_dump_upload.belongsTo(core_loan_type, { as: "core_loan_type", foreignKey: "core_loan_type_id"});
  core_loan_type.hasMany(fin_payout_dump_upload, { as: "fin_payout_dump_uploads", foreignKey: "core_loan_type_id"});
  fin_scheme.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(fin_scheme, { as: "fin_schemes", foreignKey: "loan_type_id"});
  los_application.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(los_application, { as: "los_applications", foreignKey: "loan_type_id"});
  los_application_lender_apply.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(los_application_lender_apply, { as: "los_application_lender_applies", foreignKey: "loan_type_id"});
  los_application_loan.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(los_application_loan, { as: "los_application_loans", foreignKey: "loan_type_id"});
  los_applied_rule.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "loan_type_id"});
  los_computed_offer.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(los_computed_offer, { as: "los_computed_offers", foreignKey: "loan_type_id"});
  ver_verification_category.belongsTo(core_loan_type, { as: "loan_type", foreignKey: "loan_type_id"});
  core_loan_type.hasMany(ver_verification_category, { as: "ver_verification_categories", foreignKey: "loan_type_id"});
  core_module.belongsTo(core_module, { as: "parent_module", foreignKey: "parent_module_id"});
  core_module.hasMany(core_module, { as: "core_modules", foreignKey: "parent_module_id"});
  core_role_module_map.belongsTo(core_module, { as: "module", foreignKey: "module_id"});
  core_module.hasMany(core_role_module_map, { as: "core_role_module_maps", foreignKey: "module_id"});
  core_note.belongsTo(core_note, { as: "parent_note", foreignKey: "parent_note_id"});
  core_note.hasMany(core_note, { as: "core_notes", foreignKey: "parent_note_id"});
  core_user_notification.belongsTo(core_notification, { as: "notification", foreignKey: "notification_id"});
  core_notification.hasMany(core_user_notification, { as: "core_user_notifications", foreignKey: "notification_id"});
  core_employee.belongsTo(core_office, { as: "office", foreignKey: "office_id"});
  core_office.hasMany(core_employee, { as: "core_employees", foreignKey: "office_id"});
  core_channel_user.belongsTo(core_pincode, { as: "pincode", foreignKey: "pincode_id"});
  core_pincode.hasMany(core_channel_user, { as: "core_channel_users", foreignKey: "pincode_id"});
  core_office.belongsTo(core_pincode, { as: "area", foreignKey: "area_id"});
  core_pincode.hasMany(core_office, { as: "core_offices", foreignKey: "area_id"});
  fin_invoice.belongsTo(core_pincode, { as: "area", foreignKey: "area_id"});
  core_pincode.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "area_id"});
  fin_invoice.belongsTo(core_pincode, { as: "from_area", foreignKey: "from_area_id"});
  core_pincode.hasMany(fin_invoice, { as: "from_area_fin_invoices", foreignKey: "from_area_id"});
  onb_address.belongsTo(core_pincode, { as: "pincode", foreignKey: "pincode_id"});
  core_pincode.hasMany(onb_address, { as: "onb_addresses", foreignKey: "pincode_id"});
  crm_lead.belongsTo(core_product, { as: "product", foreignKey: "product_id"});
  core_product.hasMany(crm_lead, { as: "crm_leads", foreignKey: "product_id"});
  cam_configuration.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(cam_configuration, { as: "cam_configurations", foreignKey: "rule_id"});
  core_checklist.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(core_checklist, { as: "core_checklists", foreignKey: "rule_id"});
  core_checklist_item.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(core_checklist_item, { as: "core_checklist_items", foreignKey: "rule_id"});
  core_lender_offer_rule.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(core_lender_offer_rule, { as: "core_lender_offer_rules", foreignKey: "rule_id"});
  core_lender_scheme_charge.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(core_lender_scheme_charge, { as: "core_lender_scheme_charges", foreignKey: "rule_id"});
  core_rule_category.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(core_rule_category, { as: "core_rule_categories", foreignKey: "rule_id"});
  core_rule_execution.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(core_rule_execution, { as: "core_rule_executions", foreignKey: "rule_id"});
  core_workflow.belongsTo(core_rule, { as: "allocation_rule", foreignKey: "allocation_rule_id"});
  core_rule.hasMany(core_workflow, { as: "core_workflows", foreignKey: "allocation_rule_id"});
  core_workflow_stage.belongsTo(core_rule, { as: "allocation_rule", foreignKey: "allocation_rule_id"});
  core_rule.hasMany(core_workflow_stage, { as: "core_workflow_stages", foreignKey: "allocation_rule_id"});
  core_workflow_step.belongsTo(core_rule, { as: "completion_rule", foreignKey: "completion_rule_id"});
  core_rule.hasMany(core_workflow_step, { as: "core_workflow_steps", foreignKey: "completion_rule_id"});
  core_workflow_step.belongsTo(core_rule, { as: "allocation_rule", foreignKey: "allocation_rule_id"});
  core_rule.hasMany(core_workflow_step, { as: "allocation_rule_core_workflow_steps", foreignKey: "allocation_rule_id"});
  fin_scheme.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(fin_scheme, { as: "fin_schemes", foreignKey: "rule_id"});
  ver_verification_category_questions.belongsTo(core_rule, { as: "rule", foreignKey: "rule_id"});
  core_rule.hasMany(ver_verification_category_questions, { as: "ver_verification_category_questions", foreignKey: "rule_id"});
  ver_verification_category_rule.belongsTo(core_rule, { as: "allocation_rule", foreignKey: "allocation_rule_id"});
  core_rule.hasMany(ver_verification_category_rule, { as: "ver_verification_category_rules", foreignKey: "allocation_rule_id"});
  los_applied_rule.belongsTo(core_rule_category, { as: "rule_category", foreignKey: "rule_category_id"});
  core_rule_category.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "rule_category_id"});
  los_elimination_rule.belongsTo(core_rule_category, { as: "rule_category", foreignKey: "rule_category_id"});
  core_rule_category.hasMany(los_elimination_rule, { as: "los_elimination_rules", foreignKey: "rule_category_id"});
  los_applied_rule.belongsTo(core_rule_execution, { as: "rule_execution", foreignKey: "rule_execution_id"});
  core_rule_execution.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "rule_execution_id"});
  los_elimination_rule.belongsTo(core_rule_execution, { as: "rule_execution", foreignKey: "rule_execution_id"});
  core_rule_execution.hasMany(los_elimination_rule, { as: "los_elimination_rules", foreignKey: "rule_execution_id"});
  los_offer_rule.belongsTo(core_rule_execution, { as: "rule_execution", foreignKey: "rule_execution_id"});
  core_rule_execution.hasMany(los_offer_rule, { as: "los_offer_rules", foreignKey: "rule_execution_id"});
  core_parameter_associate.belongsTo(core_rule_parameter, { as: "rule_parameter", foreignKey: "rule_parameter_id"});
  core_rule_parameter.hasMany(core_parameter_associate, { as: "core_parameter_associates", foreignKey: "rule_parameter_id"});
  ver_verification_category_questions.belongsTo(core_rule_parameter, { as: "rule_parameter", foreignKey: "rule_parameter_id"});
  core_rule_parameter.hasMany(ver_verification_category_questions, { as: "ver_verification_category_questions", foreignKey: "rule_parameter_id"});
  core_fcm_token.belongsTo(core_service_provider, { as: "service_provider", foreignKey: "service_provider_id"});
  core_service_provider.hasMany(core_fcm_token, { as: "core_fcm_tokens", foreignKey: "service_provider_id"});
  core_template.belongsTo(core_service_provider, { as: "service_provider", foreignKey: "service_provider_id"});
  core_service_provider.hasMany(core_template, { as: "core_templates", foreignKey: "service_provider_id"});
  core_city.belongsTo(core_state, { as: "state", foreignKey: "state_id"});
  core_state.hasMany(core_city, { as: "core_cities", foreignKey: "state_id"});
  core_office.belongsTo(core_state, { as: "state", foreignKey: "state_id"});
  core_state.hasMany(core_office, { as: "core_offices", foreignKey: "state_id"});
  core_pincode.belongsTo(core_state, { as: "state", foreignKey: "state_id"});
  core_state.hasMany(core_pincode, { as: "core_pincodes", foreignKey: "state_id"});
  fin_invoice.belongsTo(core_state, { as: "state", foreignKey: "state_id"});
  core_state.hasMany(fin_invoice, { as: "fin_invoices", foreignKey: "state_id"});
  fin_invoice.belongsTo(core_state, { as: "from_state", foreignKey: "from_state_id"});
  core_state.hasMany(fin_invoice, { as: "from_state_fin_invoices", foreignKey: "from_state_id"});
  core_lender_loan_type.belongsTo(core_sub_loan_type, { as: "sub_loan_type", foreignKey: "sub_loan_type_id"});
  core_sub_loan_type.hasMany(core_lender_loan_type, { as: "core_lender_loan_types", foreignKey: "sub_loan_type_id"});
  core_lender_scheme.belongsTo(core_sub_loan_type, { as: "sub_loan_type", foreignKey: "sub_loan_type_id"});
  core_sub_loan_type.hasMany(core_lender_scheme, { as: "core_lender_schemes", foreignKey: "sub_loan_type_id"});
  los_application_loan.belongsTo(core_sub_loan_type, { as: "sub_loan_type", foreignKey: "sub_loan_type_id"});
  core_sub_loan_type.hasMany(los_application_loan, { as: "los_application_loans", foreignKey: "sub_loan_type_id"});
  core_activity.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(core_activity, { as: "core_activities", foreignKey: "task_id"});
  core_ask.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(core_ask, { as: "core_asks", foreignKey: "task_id"});
  core_task.belongsTo(core_task, { as: "next_task", foreignKey: "next_task_id"});
  core_task.hasMany(core_task, { as: "core_tasks", foreignKey: "next_task_id"});
  core_workflow_instance.belongsTo(core_task, { as: "active_task", foreignKey: "active_task_id"});
  core_task.hasMany(core_workflow_instance, { as: "core_workflow_instances", foreignKey: "active_task_id"});
  core_workflow_instance.belongsTo(core_task, { as: "completed_task", foreignKey: "completed_task_id"});
  core_task.hasMany(core_workflow_instance, { as: "completed_task_core_workflow_instances", foreignKey: "completed_task_id"});
  crm_lead_participant.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(crm_lead_participant, { as: "crm_lead_participants", foreignKey: "task_id"});
  los_appeal.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(los_appeal, { as: "los_appeals", foreignKey: "task_id"});
  los_application_participant.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(los_application_participant, { as: "los_application_participants", foreignKey: "task_id"});
  los_applied_rule.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "task_id"});
  onb_dedupe.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(onb_dedupe, { as: "onb_dedupes", foreignKey: "task_id"});
  ver_verification.belongsTo(core_task, { as: "task", foreignKey: "task_id"});
  core_task.hasMany(ver_verification, { as: "ver_verifications", foreignKey: "task_id"});
  core_user_notification.belongsTo(core_template, { as: "template", foreignKey: "template_id"});
  core_template.hasMany(core_user_notification, { as: "core_user_notifications", foreignKey: "template_id"});
  core_channel.belongsTo(core_territory, { as: "onboarding_territory", foreignKey: "onboarding_territory_id"});
  core_territory.hasMany(core_channel, { as: "core_channels", foreignKey: "onboarding_territory_id"});
  core_channel_territory.belongsTo(core_territory, { as: "territory", foreignKey: "territory_id"});
  core_territory.hasMany(core_channel_territory, { as: "core_channel_territories", foreignKey: "territory_id"});
  core_office.belongsTo(core_territory, { as: "territory", foreignKey: "territory_id"});
  core_territory.hasMany(core_office, { as: "core_offices", foreignKey: "territory_id"});
  core_territory.belongsTo(core_territory, { as: "parent", foreignKey: "parent_id"});
  core_territory.hasMany(core_territory, { as: "core_territories", foreignKey: "parent_id"});
  core_user_territory.belongsTo(core_territory, { as: "territory", foreignKey: "territory_id"});
  core_territory.hasMany(core_user_territory, { as: "core_user_territories", foreignKey: "territory_id"});
  core_user_territory_loan_type_scope.belongsTo(core_territory, { as: "territory", foreignKey: "territory_id"});
  core_territory.hasMany(core_user_territory_loan_type_scope, { as: "core_user_territory_loan_type_scopes", foreignKey: "territory_id"});
  fin_estimate_earning.belongsTo(core_territory, { as: "sourcing_territory", foreignKey: "sourcing_territory_id"});
  core_territory.hasMany(fin_estimate_earning, { as: "fin_estimate_earnings", foreignKey: "sourcing_territory_id"});
  fin_estimate_earning.belongsTo(core_territory, { as: "servicing_territory", foreignKey: "servicing_territory_id"});
  core_territory.hasMany(fin_estimate_earning, { as: "servicing_territory_fin_estimate_earnings", foreignKey: "servicing_territory_id"});
  fin_scheme_group.belongsTo(core_territory, { as: "core_territory", foreignKey: "core_territory_id"});
  core_territory.hasMany(fin_scheme_group, { as: "fin_scheme_groups", foreignKey: "core_territory_id"});
  los_application.belongsTo(core_territory, { as: "servicing_territory", foreignKey: "servicing_territory_id"});
  core_territory.hasMany(los_application, { as: "los_applications", foreignKey: "servicing_territory_id"});
  los_application.belongsTo(core_territory, { as: "sourcing_territory", foreignKey: "sourcing_territory_id"});
  core_territory.hasMany(los_application, { as: "sourcing_territory_los_applications", foreignKey: "sourcing_territory_id"});
  los_application_participant.belongsTo(core_territory, { as: "territory", foreignKey: "territory_id"});
  core_territory.hasMany(los_application_participant, { as: "los_application_participants", foreignKey: "territory_id"});
  core_office.belongsTo(core_territory_type, { as: "territory_type", foreignKey: "territory_type_id"});
  core_territory_type.hasMany(core_office, { as: "core_offices", foreignKey: "territory_type_id"});
  core_territory.belongsTo(core_territory_type, { as: "territory_type", foreignKey: "territory_type_id"});
  core_territory_type.hasMany(core_territory, { as: "core_territories", foreignKey: "territory_type_id"});
  core_territory_type.belongsTo(core_territory_type, { as: "parent", foreignKey: "parent_id"});
  core_territory_type.hasMany(core_territory_type, { as: "core_territory_types", foreignKey: "parent_id"});
  core_user_territory_loan_type_scope.belongsTo(core_territory_type, { as: "territory_type", foreignKey: "territory_type_id"});
  core_territory_type.hasMany(core_user_territory_loan_type_scope, { as: "core_user_territory_loan_type_scopes", foreignKey: "territory_type_id"});
  core_ask.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_ask, { as: "core_asks", foreignKey: "user_id"});
  core_ask.belongsTo(core_user, { as: "created_by", foreignKey: "created_by_id"});
  core_user.hasMany(core_ask, { as: "created_by_core_asks", foreignKey: "created_by_id"});
  core_ask_summary.belongsTo(core_user, { as: "created_by", foreignKey: "created_by_id"});
  core_user.hasMany(core_ask_summary, { as: "core_ask_summaries", foreignKey: "created_by_id"});
  core_ask_summary.belongsTo(core_user, { as: "resolved_by", foreignKey: "resolved_by_id"});
  core_user.hasMany(core_ask_summary, { as: "resolved_by_core_ask_summaries", foreignKey: "resolved_by_id"});
  core_channel_user.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_channel_user, { as: "core_channel_users", foreignKey: "user_id"});
  core_customer.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_customer, { as: "core_customers", foreignKey: "user_id"});
  core_employee.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_employee, { as: "core_employees", foreignKey: "user_id"});
  core_fcm_token.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_fcm_token, { as: "core_fcm_tokens", foreignKey: "user_id"});
  core_lender_contract.belongsTo(core_user, { as: "rm_user", foreignKey: "rm_user_id"});
  core_user.hasMany(core_lender_contract, { as: "core_lender_contracts", foreignKey: "rm_user_id"});
  core_note.belongsTo(core_user, { as: "created_user", foreignKey: "created_user_id"});
  core_user.hasMany(core_note, { as: "core_notes", foreignKey: "created_user_id"});
  core_report_request.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_report_request, { as: "core_report_requests", foreignKey: "user_id"});
  core_url_shortener.belongsTo(core_user, { as: "created_user", foreignKey: "created_user_id"});
  core_user.hasMany(core_url_shortener, { as: "core_url_shorteners", foreignKey: "created_user_id"});
  core_user_credential_request.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_user_credential_request, { as: "core_user_credential_requests", foreignKey: "user_id"});
  core_user_login_activity.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_user_login_activity, { as: "core_user_login_activities", foreignKey: "user_id"});
  core_user_notification.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_user_notification, { as: "core_user_notifications", foreignKey: "user_id"});
  core_user_role_map.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_user_role_map, { as: "core_user_role_maps", foreignKey: "user_id"});
  core_user_territory.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_user_territory, { as: "core_user_territories", foreignKey: "user_id"});
  core_user_territory_loan_type_scope.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(core_user_territory_loan_type_scope, { as: "core_user_territory_loan_type_scopes", foreignKey: "user_id"});
  crm_lead_participant.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(crm_lead_participant, { as: "crm_lead_participants", foreignKey: "user_id"});
  los_application_lender_apply.belongsTo(core_user, { as: "applied_user", foreignKey: "applied_user_id"});
  core_user.hasMany(los_application_lender_apply, { as: "los_application_lender_applies", foreignKey: "applied_user_id"});
  onb_dedupe.belongsTo(core_user, { as: "resolved_by_core_user", foreignKey: "resolved_by"});
  core_user.hasMany(onb_dedupe, { as: "onb_dedupes", foreignKey: "resolved_by"});
  ver_verification.belongsTo(core_user, { as: "user", foreignKey: "user_id"});
  core_user.hasMany(ver_verification, { as: "ver_verifications", foreignKey: "user_id"});
  core_role_module_map.belongsTo(core_user_role, { as: "role", foreignKey: "role_id"});
  core_user_role.hasMany(core_role_module_map, { as: "core_role_module_maps", foreignKey: "role_id"});
  core_role_privilege.belongsTo(core_user_role, { as: "user_role", foreignKey: "user_role_id"});
  core_user_role.hasMany(core_role_privilege, { as: "core_role_privileges", foreignKey: "user_role_id"});
  core_user_role.belongsTo(core_user_role, { as: "parent_role", foreignKey: "parent_role_id"});
  core_user_role.hasMany(core_user_role, { as: "core_user_roles", foreignKey: "parent_role_id"});
  core_user_role_map.belongsTo(core_user_role, { as: "role", foreignKey: "role_id"});
  core_user_role.hasMany(core_user_role_map, { as: "core_user_role_maps", foreignKey: "role_id"});
  core_user_territory_lender.belongsTo(core_user_territory, { as: "user_territory", foreignKey: "user_territory_id"});
  core_user_territory.hasMany(core_user_territory_lender, { as: "core_user_territory_lenders", foreignKey: "user_territory_id"});
  core_user_territory_loan_type.belongsTo(core_user_territory, { as: "user_territory", foreignKey: "user_territory_id"});
  core_user_territory.hasMany(core_user_territory_loan_type, { as: "core_user_territory_loan_types", foreignKey: "user_territory_id"});
  core_activity.belongsTo(core_workflow, { as: "workflow", foreignKey: "workflow_id"});
  core_workflow.hasMany(core_activity, { as: "core_activities", foreignKey: "workflow_id"});
  core_workflow_instance.belongsTo(core_workflow, { as: "workflow", foreignKey: "workflow_id"});
  core_workflow.hasMany(core_workflow_instance, { as: "core_workflow_instances", foreignKey: "workflow_id"});
  core_workflow_stage.belongsTo(core_workflow, { as: "workflow", foreignKey: "workflow_id"});
  core_workflow.hasMany(core_workflow_stage, { as: "core_workflow_stages", foreignKey: "workflow_id"});
  core_workflow_step.belongsTo(core_workflow, { as: "workflow", foreignKey: "workflow_id"});
  core_workflow.hasMany(core_workflow_step, { as: "core_workflow_steps", foreignKey: "workflow_id"});
  core_activity.belongsTo(core_workflow_instance, { as: "workflow_instance", foreignKey: "workflow_instance_id"});
  core_workflow_instance.hasMany(core_activity, { as: "core_activities", foreignKey: "workflow_instance_id"});
  core_task.belongsTo(core_workflow_instance, { as: "workflow_instance", foreignKey: "workflow_instance_id"});
  core_workflow_instance.hasMany(core_task, { as: "core_tasks", foreignKey: "workflow_instance_id"});
  core_workflow_instance.belongsTo(core_workflow_instance, { as: "previous_instance", foreignKey: "previous_instance_id"});
  core_workflow_instance.hasMany(core_workflow_instance, { as: "core_workflow_instances", foreignKey: "previous_instance_id"});
  core_workflow_instance.belongsTo(core_workflow_instance, { as: "parent_instance", foreignKey: "parent_instance_id"});
  core_workflow_instance.hasMany(core_workflow_instance, { as: "parent_instance_core_workflow_instances", foreignKey: "parent_instance_id"});
  lcs_collection.belongsTo(core_workflow_instance, { as: "workflow_instance", foreignKey: "workflow_instance_id"});
  core_workflow_instance.hasMany(lcs_collection, { as: "lcs_collections", foreignKey: "workflow_instance_id"});
  core_workflow_step.belongsTo(core_workflow_stage, { as: "stage", foreignKey: "stage_id"});
  core_workflow_stage.hasMany(core_workflow_step, { as: "core_workflow_steps", foreignKey: "stage_id"});
  core_activity.belongsTo(core_workflow_step, { as: "step", foreignKey: "step_id"});
  core_workflow_step.hasMany(core_activity, { as: "core_activities", foreignKey: "step_id"});
  core_step_notification.belongsTo(core_workflow_step, { as: "step", foreignKey: "step_id"});
  core_workflow_step.hasMany(core_step_notification, { as: "core_step_notifications", foreignKey: "step_id"});
  core_task.belongsTo(core_workflow_step, { as: "step", foreignKey: "step_id"});
  core_workflow_step.hasMany(core_task, { as: "core_tasks", foreignKey: "step_id"});
  los_computed_offer.belongsTo(core_workflow_step, { as: "workflow_step", foreignKey: "workflow_step_id"});
  core_workflow_step.hasMany(los_computed_offer, { as: "los_computed_offers", foreignKey: "workflow_step_id"});
  los_elimination_rule.belongsTo(core_workflow_step, { as: "workflow_step", foreignKey: "workflow_step_id"});
  core_workflow_step.hasMany(los_elimination_rule, { as: "los_elimination_rules", foreignKey: "workflow_step_id"});
  los_offer_rule.belongsTo(core_workflow_step, { as: "workflow_step", foreignKey: "workflow_step_id"});
  core_workflow_step.hasMany(los_offer_rule, { as: "los_offer_rules", foreignKey: "workflow_step_id"});
  crm_lead_participant.belongsTo(crm_lead, { as: "lead", foreignKey: "lead_id"});
  crm_lead.hasMany(crm_lead_participant, { as: "crm_lead_participants", foreignKey: "lead_id"});
  fin_invoice_item.belongsTo(fin_invoice, { as: "invoice", foreignKey: "invoice_id"});
  fin_invoice.hasMany(fin_invoice_item, { as: "fin_invoice_items", foreignKey: "invoice_id"});
  fin_payout_dump_invoice.belongsTo(fin_invoice, { as: "invoice", foreignKey: "invoice_id"});
  fin_invoice.hasMany(fin_payout_dump_invoice, { as: "fin_payout_dump_invoices", foreignKey: "invoice_id"});
  fin_scheme_group.belongsTo(fin_parent_category, { as: "fin_parent_category", foreignKey: "fin_parent_category_id"});
  fin_parent_category.hasMany(fin_scheme_group, { as: "fin_scheme_groups", foreignKey: "fin_parent_category_id"});
  fin_payout_dump_invoice.belongsTo(fin_payout_dump_upload, { as: "payout_dump_upload", foreignKey: "payout_dump_upload_id"});
  fin_payout_dump_upload.hasMany(fin_payout_dump_invoice, { as: "fin_payout_dump_invoices", foreignKey: "payout_dump_upload_id"});
  fin_estimate_earning.belongsTo(fin_scheme, { as: "scheme", foreignKey: "scheme_id"});
  fin_scheme.hasMany(fin_estimate_earning, { as: "fin_estimate_earnings", foreignKey: "scheme_id"});
  fin_scheme_group_map.belongsTo(fin_scheme, { as: "scheme", foreignKey: "scheme_id"});
  fin_scheme.hasMany(fin_scheme_group_map, { as: "fin_scheme_group_maps", foreignKey: "scheme_id"});
  fin_scheme_group.belongsTo(fin_scheme_group, { as: "reference_scheme_group", foreignKey: "reference_scheme_group_id"});
  fin_scheme_group.hasMany(fin_scheme_group, { as: "fin_scheme_groups", foreignKey: "reference_scheme_group_id"});
  fin_scheme_group_map.belongsTo(fin_scheme_group, { as: "scheme_group", foreignKey: "scheme_group_id"});
  fin_scheme_group.hasMany(fin_scheme_group_map, { as: "fin_scheme_group_maps", foreignKey: "scheme_group_id"});
  fin_scheme_group_channel_map.belongsTo(fin_scheme_group_map, { as: "scheme_group_map", foreignKey: "scheme_group_map_id"});
  fin_scheme_group_map.hasMany(fin_scheme_group_channel_map, { as: "fin_scheme_group_channel_maps", foreignKey: "scheme_group_map_id"});
  lcs_collection_upload_map.belongsTo(lcs_collection, { as: "collection", foreignKey: "collection_id"});
  lcs_collection.hasMany(lcs_collection_upload_map, { as: "lcs_collection_upload_maps", foreignKey: "collection_id"});
  lcs_collection_upload_map.belongsTo(lcs_collection_upload, { as: "collection_upload", foreignKey: "collection_upload_id"});
  lcs_collection_upload.hasMany(lcs_collection_upload_map, { as: "lcs_collection_upload_maps", foreignKey: "collection_upload_id"});
  lcs_collection.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(lcs_collection, { as: "lcs_collections", foreignKey: "loan_id"});
  lms_loan_applicant.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(lms_loan_applicant, { as: "lms_loan_applicants", foreignKey: "loan_id"});
  lms_loan_disbursement.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(lms_loan_disbursement, { as: "lms_loan_disbursements", foreignKey: "loan_id"});
  lms_loan_payment.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(lms_loan_payment, { as: "lms_loan_payments", foreignKey: "loan_id"});
  lms_loan_property.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(lms_loan_property, { as: "lms_loan_properties", foreignKey: "loan_id"});
  lms_loan_repayment.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(lms_loan_repayment, { as: "lms_loan_repayments", foreignKey: "loan_id"});
  lms_loan_vehicle_details.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(lms_loan_vehicle_details, { as: "lms_loan_vehicle_details", foreignKey: "loan_id"});
  los_offer.belongsTo(lms_loan_account, { as: "loan", foreignKey: "loan_id"});
  lms_loan_account.hasMany(los_offer, { as: "los_offers", foreignKey: "loan_id"});
  lms_loan_applicant_address.belongsTo(lms_loan_applicant, { as: "loan_applicant", foreignKey: "loan_applicant_id"});
  lms_loan_applicant.hasMany(lms_loan_applicant_address, { as: "lms_loan_applicant_addresses", foreignKey: "loan_applicant_id"});
  lms_loan_payment.belongsTo(lms_loan_repayment, { as: "repayment", foreignKey: "repayment_id"});
  lms_loan_repayment.hasMany(lms_loan_payment, { as: "lms_loan_payments", foreignKey: "repayment_id"});
  los_offer.belongsTo(los_appeal, { as: "reference_appeal", foreignKey: "reference_appeal_id"});
  los_appeal.hasMany(los_offer, { as: "los_offers", foreignKey: "reference_appeal_id"});
  core_ask.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(core_ask, { as: "core_asks", foreignKey: "application_id"});
  fin_estimate_earning.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(fin_estimate_earning, { as: "fin_estimate_earnings", foreignKey: "application_id"});
  fin_invoice_item.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(fin_invoice_item, { as: "fin_invoice_items", foreignKey: "application_id"});
  los_application_document.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_application_document, { as: "los_application_documents", foreignKey: "application_id"});
  los_application_lender_apply.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_application_lender_apply, { as: "los_application_lender_applies", foreignKey: "application_id"});
  los_application_loan.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_application_loan, { as: "los_application_loans", foreignKey: "application_id"});
  los_application_participant.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_application_participant, { as: "los_application_participants", foreignKey: "application_id"});
  los_application_property.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_application_property, { as: "los_application_properties", foreignKey: "application_id"});
  los_applied_rule.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "application_id"});
  los_computed_offer.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_computed_offer, { as: "los_computed_offers", foreignKey: "application_id"});
  los_elimination_rule.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_elimination_rule, { as: "los_elimination_rules", foreignKey: "application_id"});
  los_offer.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_offer, { as: "los_offers", foreignKey: "application_id"});
  los_offer_rule.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_offer_rule, { as: "los_offer_rules", foreignKey: "application_id"});
  los_vehicle_details.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(los_vehicle_details, { as: "los_vehicle_details", foreignKey: "application_id"});
  ver_verification.belongsTo(los_application, { as: "application", foreignKey: "application_id"});
  los_application.hasMany(ver_verification, { as: "ver_verifications", foreignKey: "application_id"});
  core_ask_summary.belongsTo(los_application_lender_apply, { as: "lender_apply", foreignKey: "lender_apply_id"});
  los_application_lender_apply.hasMany(core_ask_summary, { as: "core_ask_summaries", foreignKey: "lender_apply_id"});
  los_offer.belongsTo(los_application_loan, { as: "application_loan", foreignKey: "application_loan_id"});
  los_application_loan.hasMany(los_offer, { as: "los_offers", foreignKey: "application_loan_id"});
  ver_verification.belongsTo(los_application_participant, { as: "application_participant", foreignKey: "application_participant_id"});
  los_application_participant.hasMany(ver_verification, { as: "ver_verifications", foreignKey: "application_participant_id"});
  los_appeal.belongsTo(los_offer, { as: "offer", foreignKey: "offer_id"});
  los_offer.hasMany(los_appeal, { as: "los_appeals", foreignKey: "offer_id"});
  los_charge_and_fees.belongsTo(los_offer, { as: "offer", foreignKey: "offer_id"});
  los_offer.hasMany(los_charge_and_fees, { as: "los_charge_and_fees", foreignKey: "offer_id"});
  los_disbursement_bank_account.belongsTo(los_offer, { as: "offer", foreignKey: "offer_id"});
  los_offer.hasMany(los_disbursement_bank_account, { as: "los_disbursement_bank_accounts", foreignKey: "offer_id"});
  los_offer.belongsTo(los_offer, { as: "previous_offer", foreignKey: "previous_offer_id"});
  los_offer.hasMany(los_offer, { as: "los_offers", foreignKey: "previous_offer_id"});
  los_repayment_schedule.belongsTo(los_offer, { as: "offer", foreignKey: "offer_id"});
  los_offer.hasMany(los_repayment_schedule, { as: "los_repayment_schedules", foreignKey: "offer_id"});
  onb_entity_user.belongsTo(onb_address, { as: "address", foreignKey: "address_id"});
  onb_address.hasMany(onb_entity_user, { as: "onb_entity_users", foreignKey: "address_id"});
  onb_person_work.belongsTo(onb_address, { as: "address", foreignKey: "address_id"});
  onb_address.hasMany(onb_person_work, { as: "onb_person_works", foreignKey: "address_id"});
  core_channel.belongsTo(onb_application, { as: "onboarding", foreignKey: "onboarding_id"});
  onb_application.hasMany(core_channel, { as: "core_channels", foreignKey: "onboarding_id"});
  los_application.belongsTo(onb_application, { as: "onboarding", foreignKey: "onboarding_id"});
  onb_application.hasMany(los_application, { as: "los_applications", foreignKey: "onboarding_id"});
  los_applied_rule.belongsTo(onb_application, { as: "onboarding", foreignKey: "onboarding_id"});
  onb_application.hasMany(los_applied_rule, { as: "los_applied_rules", foreignKey: "onboarding_id"});
  onb_address.belongsTo(onb_application, { as: "application", foreignKey: "application_id"});
  onb_application.hasMany(onb_address, { as: "onb_addresses", foreignKey: "application_id"});
  onb_dedupe.belongsTo(onb_application, { as: "application", foreignKey: "application_id"});
  onb_application.hasMany(onb_dedupe, { as: "onb_dedupes", foreignKey: "application_id"});
  onb_document.belongsTo(onb_application, { as: "application", foreignKey: "application_id"});
  onb_application.hasMany(onb_document, { as: "onb_documents", foreignKey: "application_id"});
  onb_entity.belongsTo(onb_application, { as: "application", foreignKey: "application_id"});
  onb_application.hasMany(onb_entity, { as: "onb_entities", foreignKey: "application_id"});
  onb_person.belongsTo(onb_application, { as: "application", foreignKey: "application_id"});
  onb_application.hasMany(onb_person, { as: "onb_people", foreignKey: "application_id"});
  onb_reference.belongsTo(onb_application, { as: "application", foreignKey: "application_id"});
  onb_application.hasMany(onb_reference, { as: "onb_references", foreignKey: "application_id"});
  cam_bank_analysis.belongsTo(onb_bank_account, { as: "bank_account", foreignKey: "bank_account_id"});
  onb_bank_account.hasMany(cam_bank_analysis, { as: "cam_bank_analyses", foreignKey: "bank_account_id"});
  onb_document.belongsTo(onb_bank_account, { as: "bank_account", foreignKey: "bank_account_id"});
  onb_bank_account.hasMany(onb_document, { as: "onb_documents", foreignKey: "bank_account_id"});
  cam_bank_analysis.belongsTo(onb_entity, { as: "entity", foreignKey: "entity_id"});
  onb_entity.hasMany(cam_bank_analysis, { as: "cam_bank_analyses", foreignKey: "entity_id"});
  cam_bureau_analysis.belongsTo(onb_entity, { as: "entity", foreignKey: "entity_id"});
  onb_entity.hasMany(cam_bureau_analysis, { as: "cam_bureau_analyses", foreignKey: "entity_id"});
  onb_address.belongsTo(onb_entity, { as: "entity", foreignKey: "entity_id"});
  onb_entity.hasMany(onb_address, { as: "onb_addresses", foreignKey: "entity_id"});
  onb_bank_account.belongsTo(onb_entity, { as: "entity", foreignKey: "entity_id"});
  onb_entity.hasMany(onb_bank_account, { as: "onb_bank_accounts", foreignKey: "entity_id"});
  onb_document.belongsTo(onb_entity, { as: "entity", foreignKey: "entity_id"});
  onb_entity.hasMany(onb_document, { as: "onb_documents", foreignKey: "entity_id"});
  onb_entity_user.belongsTo(onb_entity, { as: "entity", foreignKey: "entity_id"});
  onb_entity.hasMany(onb_entity_user, { as: "onb_entity_users", foreignKey: "entity_id"});
  onb_income.belongsTo(onb_entity, { as: "entity", foreignKey: "entity_id"});
  onb_entity.hasMany(onb_income, { as: "onb_incomes", foreignKey: "entity_id"});
  cam_bank_analysis.belongsTo(onb_person, { as: "person", foreignKey: "person_id"});
  onb_person.hasMany(cam_bank_analysis, { as: "cam_bank_analyses", foreignKey: "person_id"});
  cam_bureau_analysis.belongsTo(onb_person, { as: "person", foreignKey: "person_id"});
  onb_person.hasMany(cam_bureau_analysis, { as: "cam_bureau_analyses", foreignKey: "person_id"});
  onb_address.belongsTo(onb_person, { as: "person", foreignKey: "person_id"});
  onb_person.hasMany(onb_address, { as: "onb_addresses", foreignKey: "person_id"});
  onb_bank_account.belongsTo(onb_person, { as: "person", foreignKey: "person_id"});
  onb_person.hasMany(onb_bank_account, { as: "onb_bank_accounts", foreignKey: "person_id"});
  onb_document.belongsTo(onb_person, { as: "person", foreignKey: "person_id"});
  onb_person.hasMany(onb_document, { as: "onb_documents", foreignKey: "person_id"});
  onb_income.belongsTo(onb_person, { as: "person", foreignKey: "person_id"});
  onb_person.hasMany(onb_income, { as: "onb_incomes", foreignKey: "person_id"});
  onb_person_work.belongsTo(onb_person, { as: "person", foreignKey: "person_id"});
  onb_person.hasMany(onb_person_work, { as: "onb_person_works", foreignKey: "person_id"});
  onb_income.belongsTo(onb_person_work, { as: "person_work", foreignKey: "person_work_id"});
  onb_person_work.hasMany(onb_income, { as: "onb_incomes", foreignKey: "person_work_id"});
  ver_person_met.belongsTo(ver_attempt, { as: "attempt", foreignKey: "attempt_id"});
  ver_attempt.hasMany(ver_person_met, { as: "ver_person_mets", foreignKey: "attempt_id"});
  ver_verification_activity.belongsTo(ver_person_met, { as: "person_met", foreignKey: "person_met_id"});
  ver_person_met.hasMany(ver_verification_activity, { as: "ver_verification_activities", foreignKey: "person_met_id"});
  ver_attempt.belongsTo(ver_verification, { as: "verification", foreignKey: "verification_id"});
  ver_verification.hasMany(ver_attempt, { as: "ver_attempts", foreignKey: "verification_id"});
  ver_verification_activity.belongsTo(ver_verification, { as: "verification", foreignKey: "verification_id"});
  ver_verification.hasMany(ver_verification_activity, { as: "ver_verification_activities", foreignKey: "verification_id"});
  ver_verification_file.belongsTo(ver_verification, { as: "verification", foreignKey: "verification_id"});
  ver_verification.hasMany(ver_verification_file, { as: "ver_verification_files", foreignKey: "verification_id"});
  ver_verification_file.belongsTo(ver_verification_activity, { as: "verification_activity", foreignKey: "verification_activity_id"});
  ver_verification_activity.hasMany(ver_verification_file, { as: "ver_verification_files", foreignKey: "verification_activity_id"});
  ver_verification.belongsTo(ver_verification_category, { as: "verification_category", foreignKey: "verification_category_id"});
  ver_verification_category.hasMany(ver_verification, { as: "ver_verifications", foreignKey: "verification_category_id"});
  ver_verification_category_questions.belongsTo(ver_verification_category, { as: "verification_category", foreignKey: "verification_category_id"});
  ver_verification_category.hasMany(ver_verification_category_questions, { as: "ver_verification_category_questions", foreignKey: "verification_category_id"});
  ver_verification_category_rule.belongsTo(ver_verification_category, { as: "verification_category", foreignKey: "verification_category_id"});
  ver_verification_category.hasMany(ver_verification_category_rule, { as: "ver_verification_category_rules", foreignKey: "verification_category_id"});
  ver_verification_activity.belongsTo(ver_verification_category_questions, { as: "verification_category_question", foreignKey: "verification_category_question_id"});
  ver_verification_category_questions.hasMany(ver_verification_activity, { as: "ver_verification_activities", foreignKey: "verification_category_question_id"});

  return {
    cam_application,
    cam_bank_analysis,
    cam_bureau_analysis,
    cam_configuration,
    core_activity,
    core_ask,
    core_ask_summary,
    core_bank,
    core_channel,
    core_channel_employee_map,
    core_channel_lender,
    core_channel_loan_type,
    core_channel_territory,
    core_channel_user,
    core_channel_user_hierarchy,
    core_checklist,
    core_checklist_item,
    core_city,
    core_city_tier,
    core_country,
    core_customer,
    core_document,
    core_document_class,
    core_employee,
    core_employee_hierarchy,
    core_fcm_token,
    core_guest,
    core_industry_product,
    core_industry_type,
    core_journey_type,
    core_lender,
    core_lender_contract,
    core_lender_eligible_pincode,
    core_lender_loan_type,
    core_lender_offer_rule,
    core_lender_pincode_upload,
    core_lender_scheme,
    core_lender_scheme_charge,
    core_loan_type,
    core_lookup_master,
    core_module,
    core_note,
    core_notification,
    core_office,
    core_parameter_associate,
    core_pincode,
    core_product,
    core_report_request,
    core_role_module_map,
    core_role_privilege,
    core_rule,
    core_rule_category,
    core_rule_execution,
    core_rule_parameter,
    core_service_provider,
    core_state,
    core_step_notification,
    core_sub_loan_type,
    core_task,
    core_template,
    core_territory,
    core_territory_type,
    core_ui_component,
    core_url_shortener,
    core_user,
    core_user_credential_request,
    core_user_login_activity,
    core_user_notification,
    core_user_role,
    core_user_role_map,
    core_user_territory,
    core_user_territory_lender,
    core_user_territory_loan_type,
    core_user_territory_loan_type_scope,
    core_workflow,
    core_workflow_component,
    core_workflow_instance,
    core_workflow_stage,
    core_workflow_step,
    crm_contact,
    crm_lead,
    crm_lead_participant,
    fin_estimate_earning,
    fin_invoice,
    fin_invoice_item,
    fin_parent_category,
    fin_payout_dump_invoice,
    fin_payout_dump_upload,
    fin_scheme,
    fin_scheme_group,
    fin_scheme_group_channel_map,
    fin_scheme_group_map,
    lcs_collection,
    lcs_collection_upload,
    lcs_collection_upload_map,
    lms_loan_account,
    lms_loan_applicant,
    lms_loan_applicant_address,
    lms_loan_disbursement,
    lms_loan_payment,
    lms_loan_property,
    lms_loan_repayment,
    lms_loan_vehicle_details,
    los_appeal,
    los_application,
    los_application_document,
    los_application_lender_apply,
    los_application_loan,
    los_application_participant,
    los_application_property,
    los_applied_rule,
    los_charge_and_fees,
    los_computed_offer,
    los_disbursement_bank_account,
    los_elimination_rule,
    los_offer,
    los_offer_rule,
    los_repayment_schedule,
    los_vehicle_details,
    onb_address,
    onb_application,
    onb_bank_account,
    onb_dedupe,
    onb_document,
    onb_entity,
    onb_entity_user,
    onb_income,
    onb_person,
    onb_person_work,
    onb_reference,
    tenant_configuration,
    tenant_system,
    ver_attempt,
    ver_person_met,
    ver_verification,
    ver_verification_activity,
    ver_verification_category,
    ver_verification_category_questions,
    ver_verification_category_rule,
    ver_verification_file,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
