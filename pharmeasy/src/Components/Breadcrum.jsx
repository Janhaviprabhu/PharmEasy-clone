import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const Breadcrum=()=>{
    return (
      <Breadcrumb style={{fontSize:"14px"}}
        spacing="8px"
        separator={">"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/medicines">Order Medicines Online</BreadcrumbLink>
        </BreadcrumbItem>

        
      </Breadcrumb>
    );
}