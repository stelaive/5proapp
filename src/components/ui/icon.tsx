// components/ui/Icon.tsx
import React from "react";
import * as LucideIcons from "lucide-react";

// lucide-react에 존재하는 모든 아이콘 이름을 타입으로 지정
export type IconName = keyof typeof LucideIcons;

interface IconProps extends Omit<
  React.ComponentPropsWithoutRef<"svg">,
  "name"
> {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const Icon = ({
  name,
  size = 20, // 디폴트 크기: 20px
  strokeWidth = 1.75, // 디폴트 선 두께 (1.5 ~ 2 사이가 가장 예쁩니다)
  color = "currentColor", // 부모 텍스트 컬러를 그대로 따라가도록 설정
  className,
  ...props
}: IconProps) => {
  // LucideIcons 객체에서 이름에 맞는 컴포넌트를 동적으로 꺼내옵니다.
  const LucideIcon = LucideIcons[name] as React.ComponentType<any>;

  if (!LucideIcon) {
    console.warn(
      `[Icon] "${name}" 이라는 이름의 루시드 아이콘을 찾을 수 없습니다.`,
    );
    return null;
  }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      {...props}
    />
  );
};
